# Minishader

The goal of minishader is to effortlessly create timelapse data maps in a way
that is easy to pull into the browser.

This is also an experiment with doing the last mile of data shading in the
browser. Rather than sending fully-colorized PNGs, we send a the pixel bin
values and do the color mapping in Javascript. This cuts down on the amount of
data required to send to the browser, and also should make choosing a color map
and transfer function at runtime without doing that computation at runtime on a
server.

# File format

All values are big-endian.

The format supports 7 bits -- 127 different values. Experimentally, this appears
to be plenty for dynamic range for the kinds of visualizations we doing here.

## Header

- Uint32: nframes
- Uint32: height
- Uint32: width

## Index

- nframes x Uint32: byte offsets to the start of each frame

## Frame

- Zeros are run length encoded. All other values are included verbatim. For each
  one-byte value, if the high bit is 0, the number is the run of 0 pixels. If
  the high bit is 1, the it is a single pixel with value *x* & 0x7f.

## Compression

Experimentally, this format compresses quite well with gzip or brotli
compression, but that isn't implemented here yet.

## Javascript client API

### `MS.minishader(arguments)`

Creates a new `canvas` element according to an `arguments` object with the
following keys:

- `target` (string, required) a string representing the css selector that
  represents the parent DOM element
- `data` (ArrayBuffer, required) a data object, as returned by `MS.loadBinary`.
- `width` (integer, optional, default `800`) the desired width of the map.
- `height` (integer, optional, default `800`) the desired height of the map.
- `onDraw` (function, optional) a callback fired when the minishader frame
  updates, eg `(frame) => { document.getElementById('frame').innerHTMNL = frame
  }`
- `startAtFrame` (integer, optional, default `0`) which frame to start on in
  instantiation.
- `colorMap` (array, optional, default `MS.inferno`) an array that specifies the
  color map. See `MS.colorMaps` for some readily-available ones.

The `MS.minishader` object has the following functions attached to it:

- `.start()` starts the frame animation.
- `.stop()` stops the animation.
- `.goToFrame(f)` moves the map to frame `f`. Throws an error if `f > total
  number of frames - 1`.
- `.nextFrame()` increments the frame by one, and loops to beginning if you're
  incrementing past the last (useful when the animation is paused)
- `.previousFrame()` decrements the frame by one and loops to the end if you're
  incrementing past the first (useful when the animation is paused)

### `MS.loadBinary(path)`

Returns a promise that loads the minishader binary format outputted with `encoder.py`, meant to be used directly with `MS.minishader` as such:

```javascript
MS.loadBinary('cube.bin')
    .then(({data, nframes, width, height}) => {
        const slider = document.getElementById('frame-slider')
        const clock = document.getElementById('clock')
        const animatedMap = MS.minishader({
            target: '.main-container',
            background: 'bg.png',
            data,
            width,
            height,
            colorMap: MS.colorMaps.viridis,
            totalFrames: nframes,
        })
        animatedMap.start()
    })
```

### `MS.colorMaps`

Various color maps to be used with `MS.minishader`. (WIP)

