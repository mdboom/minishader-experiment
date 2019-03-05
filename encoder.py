#!/usr/bin/env python3

from pathlib import Path
import sys


import numpy as np


def load_frames(path):
    """
    Returns an iterator over individual frames saved as `.npy` files.

    @param path Path to a directory containing .npy files

    """
    path = Path(path)
    aggs = sorted(path.glob('*.npy'))

    for i, fname in enumerate(aggs):
        yield np.load(fname)[::-1]


def get_stats(frames):
    """
    Collects stats about a given set of frames.

    @param frames Iterator over frames
    @return Dictionary with the following:
        - minpix: minimum pixel value
        - maxpix: maximum pixel value
        - nframes: the number of frames
        - shape: (height, width) tuple
    """
    minpix = sys.maxsize
    maxpix = 0
    nframes = 0
    height = None
    width = None
    for frame in frames:
        if height is None:
            height, width = frame.shape
        else:
            if (height, width) != frame.shape:
                raise ValueError("Differently sized frames")
        minpix = min(np.min(frame), minpix)
        maxpix = max(np.max(frame), maxpix)
        nframes += 1
    return {
        'minpix': minpix,
        'maxpix': maxpix,
        'nframes': nframes,
        'shape': (height, width)
    }


def encode_all_frames(frames, stats, output):
    """
    Encodes all the frames in a data cube.

    The pixel values are normalized (in-place) to 0-255.
    """
    run = 0

    def write_run():
        nonlocal run
        if run:
            while run >= 128:
                frame_data.append(127)
                run -= 127
            frame_data.append(run)
            run = 0

    # The offsets of the frames, written at the beginning of the file
    dims = np.array(
        [stats['nframes'], stats['shape'][0], stats['shape'][1]],
        '>u4'
    )
    offsets = np.zeros((stats['nframes'],), '>u4')
    with open(output, 'wb') as fd:
        fd.write(dims.tobytes())
        fd.write(offsets.tobytes())
        for i, frame in enumerate(frames):
            print(f"\rFrame {i}/{stats['nframes']}", end='')
            frame_data = []
            frame = (
                (frame - stats['minpix']) * 127 /
                (stats['maxpix'] - stats['minpix'])
            )
            assert(np.max(frame) <= 127)
            frame = np.array(frame, dtype=np.uint8)
            offsets[i] = fd.tell()
            run = 0
            for pixel in frame.flatten():
                if pixel == 0:
                    run += 1
                else:
                    write_run()
                    frame_data.append(int(pixel) | 0b10000000)
            write_run()
            fd.write(bytes(frame_data))

        fd.seek(12)
        fd.write(offsets.tobytes())


def encode(input_dir, output_file):
    frames = load_frames(input_dir)
    print("[1/2] Analysing frames...")
    stats = get_stats(frames)
    print(
        f"Values {stats['minpix']}-{stats['maxpix']}. "
        f"{stats['nframes']} {stats['shape']} frames"
    )
    frames = load_frames(input_dir)
    print(f"[2/2] Encoding frames")
    encode_all_frames(
        frames, stats, output_file
    )


if __name__ == '__main__':
    print("Usage: encoder.py input_dir output_file")
    encode(sys.argv[-2], sys.argv[-1])
