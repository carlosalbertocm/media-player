const video = document.querySelector("video");
const button = document.querySelector("#playButton");

function MediaPlayer(config) {
	this.media = config.el;
}

MediaPlayer.prototype.play = function () {
	this.media.play();
};

const player = new MediaPlayer({ el: video });

// HTMLMediaElement - Web API reference MDN
button.onclick = () => player.play();
