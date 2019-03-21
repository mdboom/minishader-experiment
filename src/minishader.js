import validateArguments from './validate-arguments'
import colorMaps from './color-maps'
import decompressFrame from './decompress-frame'
const MINISHADER_CLASS = 'minishader-canvas'

function createCanvasElement({width, height, background}) {
    const canvas = document.createElement("canvas");
    const MULT = .8
    canvas.className = MINISHADER_CLASS;
    canvas.setAttribute("height", height);
    canvas.setAttribute("width", width);
    console.log(canvas.clientWidth)
    canvas.setAttribute("style", `width: ${width * MULT}px; height ${height * MULT}px`);
    if (background) {
        canvas.style.background = `url('${background}')`
        canvas.style.backgroundSize = `${width* MULT}px ${height * MULT}px`
    }
    return canvas
}

// used internally to draw the next frame.
export function draw(map) {
    const { data, width, height, colorMap, canvas, currentFrame, totalFrames } = map
    let outputBuffer = new Uint8ClampedArray(height * width * 4);
    // atm this mutates outputBuffer.
    decompressFrame(data, totalFrames, width, height, currentFrame, outputBuffer, colorMap, 255);
    // take the mutated outputBuffer and turn it into an image.
    var imageData = new ImageData(outputBuffer, width, height);
    var ctx = canvas.getContext("2d");
    ctx.putImageData(imageData, 0, 0);
    map.onDraw(currentFrame);
}

export function incrementFrame(currentFrame, totalFrames) {
    return (currentFrame === totalFrames - 1) ? 0 : currentFrame + 1
}

export function decrementFrame(currentFrame, totalFrames) {
    return (currentFrame === 0) ? totalFrames - 1 : currentFrame - 1
}

export function startFunction(map) {
    return function start() {
        map.isRunning = true
        map.interval = setInterval(() => {
            map.currentFrame = incrementFrame(map.currentFrame, map.totalFrames)
            draw(map)
        }, 20)
        return map
    }
}
export function stopFunction(map) {
    return function stop() {
        const { interval } = map;
        clearInterval(map.interval)
        map.interval = undefined
        map.isRunning = false
        return map
    }
}

export function goToFrameFunction(map) {
    return function goToFrame(f) {
        const { totalFrames } = map;
        if (f > totalFrames - 1) {
            throw new Error('requested a frame that is out of bounds')
        }
        map.currentFrame = f
        draw(map)
        return map
    }
}

export function nextFrameFunction(map) {
    return function nextFrame() {
        map.currentFrame = incrementFrame(map.currentFrame, map.totalFrames)
        draw(map)
        return map
    }
}

export function previousFrameFunction(map) {
    return function previousFrame() {
        map.currentFrame = decrementFrame(map.currentFrame, map.totalFrames)
        draw(map)
    }
}

export default function minishader(userArgs) {
    const args = validateArguments(userArgs)

    const map = {}

    map.interval = undefined
    map.data = args.data
    map.width = args.width
    map.height = args.height
    map.background = args.background
    map.colorMap = args.colorMap || colorMaps.viridis

    map.currentFrame = args.startAtFrame
    map.totalFrames = args.totalFrames
    map.onDraw = args.onDraw
    map.isRunning = args.isRunning

    map.canvas = createCanvasElement(map)
    
    const parent = document.querySelector(args.target)

    parent.appendChild(map.canvas)

    map.start = startFunction(map)
    map.stop = stopFunction(map)
    map.goToFrame = goToFrameFunction(map)
    map.nextFrame = nextFrameFunction(map)
    map.previousFrame = previousFrameFunction(map)
    draw(map)
    return map;
}
