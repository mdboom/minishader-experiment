export default function decompressFrame(data, nframes, height, width, iframe, output, cmap, alpha=255) {
    if (iframe >= nframes) {
        return;
    }
    const view = new DataView(data.buffer);
    const offset = view.getUint32(12 + iframe * 4, false);
    const input = new Uint8Array(data.buffer, offset);
    let i = 0;
    let j = 0;
    let size = height * width * 4;
    let values = {};
    while (j < size) {
        var x = input[i++];
        if (x & 0x80) {
            x = x & 0x7f;
            values[x] = cmap[(x * 3)];
            for (var k = 0; k < 3; ++k) {
                output[j++] = cmap[(x * 3) + k];
            }
            output[j++] = alpha;
        } else {
            for (var k = 0; k < x * 4; ++k) {
                output[j++] = 0x00;
            }
        }
    }
}