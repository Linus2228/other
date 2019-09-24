document.addEventListener("DOMContentLoaded", initialiseMediaPlayer);

const mediaPlayer = document.getElementById('media-video');
const playButton = document.getElementById('play-pause-button');
const volumeRange = document.getElementsByName('volume')[0];
const playbackRateRange = document.getElementsByName('playbackRate')[0];
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const skipButtons = document.querySelectorAll('[data-skip]');

function initialiseMediaPlayer() {
  mediaPlayer.controls = false;
  mediaPlayer.addEventListener('timeupdate', handleProgress);
  playButton.addEventListener("click", togglePlayPause);
  volumeRange.addEventListener("input", changeVolume);
  playbackRateRange.addEventListener("input", changePlaybackRate);
  progress.addEventListener('click', scrub);
  skipButtons.forEach(element => {
    element.addEventListener('click', skip)
  });
}

function togglePlayPause() {
  var btn = document.getElementById('play-pause-button');
  if (mediaPlayer.paused || mediaPlayer.ended) {
    btn.innerHTML = '❚ ❚';
    mediaPlayer.play();
  }
  else {
    btn.innerHTML = '►';
    mediaPlayer.pause();
  }
}

function changeVolume() {
  mediaPlayer.volume = this.value / 10;
}

function changePlaybackRate() {
  mediaPlayer[this.name] = this.value;
}

function handleProgress() {
  const percent = (mediaPlayer.currentTime / mediaPlayer.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * mediaPlayer.duration;
  mediaPlayer.currentTime = scrubTime;
}

function skip() {
  mediaPlayer.currentTime += parseFloat(this.dataset.skip);
 }
