export const loopAudioBuffer = (audioSrc) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    fetch(audioSrc)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = true;
            source.connect(audioContext.destination);
            source.start(0);
        })
        .catch(error => console.error("Error loading audio:", error));
}

