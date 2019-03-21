function callback(data) {
    var slider = document.getElementById("range");
    slider.setAttribute("max", data.nframes - 1);

    var canvas = document.getElementById("canvas");
    canvas.setAttribute("height", data.height);
    canvas.setAttribute("width", data.width);
    canvas.setAttribute("style", `width: ${data.width * .8}px; height ${data.height * .8}px`);

    var outputBuffer = new Uint8ClampedArray(data.height * data.width * 4);
    var clock = document.getElementById('clock')

    const frameToClock = (fr) => {
        const totalMin = fr * 5
        const hours = Math.floor(totalMin / (60 * 5))
        const mins = Math.floor(totalMin % (60 * 5)) / 5
        return `${(hours < 10 ? '0' : '') + hours}:${(mins < 10 ? '0' : '') + mins}:00`
    }

    slider.oninput = function() {
        // this manipulates outputBuffer.
        decompressFrame(data, this.value, outputBuffer, inferno, 210);
        var imageData = new ImageData(outputBuffer, data["width"], data["height"]);
        var ctx = canvas.getContext("2d");
        ctx.putImageData(imageData, 0, 0);
        // update clock.
        clock.innerHTML = frameToClock(this.value)
    }
    slider.value = 0;
    slider.oninput();

    var button = document.getElementById("playbutton");
    var playTimerId;
    button.onclick = function() {
        if (playTimerId === undefined) {
            button.innerHTML = "&block;";
            playTimerId = window.setInterval(function() {
                if (parseInt(slider.value) === data.nframes-1) {
                    slider.value = 0
                }
                slider.value = parseInt(slider.value) + 1;
                slider.oninput();
            }, 30);
        } else {
            button.innerHTML = "▶";
            window.clearInterval(playTimerId);
            playTimerId = undefined;
        }
    }
}

loadBinary('cube.bin').then(callback)

/* 

const timelapse = new MiniShader({
    source: "cube.bin",
    target: '#sfmta-container',
    scrubber: '#sfmta-scrubber',
    background: 'map.png'
})

timelapse.addScrubber({
    target: '#sfmta-slider',
})

timelapse.start()                // starts the timelapse
timelapse.pause()                // stops the timelapse
timelapse.goToFrame(30)          // show frame 30
timelapse.nextFrame()            // go to the next frame
timelapse.previousFrame()        // go to the next frame
timelapse.getCurrentFrame()      // get current frame

*/

