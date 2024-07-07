

const myVideoElement = document.getElementById('myVideoElement');
const myPlayPauseButton = document.getElementById('myPlayPauseButton');
const mySeekBar = document.getElementById('mySeekBar');
const myMuteButton = document.getElementById('myMuteButton');
const myVolumeBar = document.getElementById('myVolumeBar');

myPlayPauseButton.addEventListener('click', () => {
    if (myVideoElement.paused) {
        myVideoElement.play();
        myPlayPauseButton.textContent = 'Pause';
    } else {
        myVideoElement.pause();
        myPlayPauseButton.textContent = 'Play';
    }
});

myVideoElement.addEventListener('timeupdate', () => {
    const mySeekPosition = (100 / myVideoElement.duration) * myVideoElement.currentTime;
    mySeekBar.value = mySeekPosition;
});

mySeekBar.addEventListener('input', () => {
    const mySeekTo = myVideoElement.duration * (mySeekBar.value / 100);
    myVideoElement.currentTime = mySeekTo;
});

myMuteButton.addEventListener('click', () => {
    myVideoElement.muted = !myVideoElement.muted;
    myMuteButton.textContent = myVideoElement.muted ? 'Unmute' : 'Mute';
});

myVolumeBar.addEventListener('input', () => {
    myVideoElement.volume = myVolumeBar.value;
});
