function callback(data) {
    console.log(`${data.width}x${data.height} - ${data.nframes}`);
    var slider = document.getElementById("range");
    slider.setAttribute("max", data.nframes - 1);

    // var background = document.getElementById("background");
    // background.setAttribute("height", data.height);
    // background.setAttribute("width", data.width);
    // background.setAttribute("style", `width: ${data.width  * .8}px; height ${data.height * .8}px`);

    // var ctx = background.getContext("2d");
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, data.width, data.height);

    var canvas = document.getElementById("canvas");
    canvas.setAttribute("height", data.height);
    canvas.setAttribute("width", data.width);
    canvas.setAttribute("style", `width: ${data.width * .8}px; height ${data.height * .8}px`);

    var outputBuffer = new Uint8ClampedArray(data.height * data.width * 4);
    var clock = document.getElementById('clock')

    const frameToClock = (fr) => {
        //f * 5 * 60 // 12 intervals an hour * 24 hours
        const totalMin = fr * 5
        const hours = Math.floor(totalMin / (60 * 5))
        const mins = Math.floor(totalMin % (60 * 5)) / 5
        return `${(hours < 10 ? '0' : '') + hours}:${(mins < 10 ? '0' : '') + mins}:00`
    }

    slider.oninput = function() {
        var frame = decompressFrame(data, this.value, outputBuffer, inferno);
        var imageData = new ImageData(outputBuffer, data["width"], data["height"]);
        var ctx = canvas.getContext("2d");
        ctx.putImageData(imageData, 0, 0);
        // update clock.
        clock.innerHTML = frameToClock(this.value)
        //console.log(this.value);

    }
    slider.value = 0;
    slider.oninput();

    var button = document.getElementById("playbutton");
    var playTimerId;
    button.onclick = function() {
        if (playTimerId === undefined) {
            button.innerHTML = "&block;";
            playTimerId = window.setInterval(function() {
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

loadData("cube.bin", callback);
