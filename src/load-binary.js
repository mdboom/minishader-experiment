export default function loadBinary(url) {
    return new Promise((resolve, reject) => {
        function onLoad() {
            const data = new Uint8Array(this.response)
            const view = new DataView(this.response)
            const nframes =  view.getUint32(0, false)
            const height = view.getUint32(4, false)
            const width = view.getUint32(8, false)
            resolve({data, nframes, height, width})
        }
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', onLoad);
        xhr.addEventListener('error', (err) => {
            reject(new Error(err.msg))
        })
        xhr.responseType = 'arraybuffer';
        xhr.open('GET', url);
        xhr.send();
    })
}