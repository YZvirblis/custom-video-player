const video = document.getElementById("video");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const rewindButton = document.getElementById("rewind");
const fastForwardButton = document.getElementById("fastForward");
const progressBar = document.getElementById("progress");
const volumeControl = document.getElementById("volume");
const fullscreenButton = document.getElementById("fullscreen");

playButton.addEventListener("click", () => {
  video.play();
});

pauseButton.addEventListener("click", () => {
  video.pause();
});

stopButton.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  progressBar.value = 0;
});

rewindButton.addEventListener("click", () => {
  video.currentTime -= 10;
});

fastForwardButton.addEventListener("click", () => {
  video.currentTime += 10;
});

video.addEventListener("timeupdate", () => {
  progressBar.value = (video.currentTime / video.duration) * 100;
});

progressBar.addEventListener("input", () => {
  video.currentTime = (progressBar.value / 100) * video.duration;
});

volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value;
});

fullscreenButton.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
