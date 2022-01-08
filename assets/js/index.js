import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });

const button = document.querySelector("#playButton");
button.onclick = () => player.togglePlay();
