# Minishader

This is an experiment with doing the last mile of data shading in the browser.
Rather than sending fully-colorized PNGs, we send a the pixel bin values and do
the color mapping in Javascript. This cuts down on the amount of data required
to send to the browser, and also should make choosing a color map and transfer
function at runtime without doing that computation at runtime on a server.

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
