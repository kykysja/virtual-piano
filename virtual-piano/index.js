const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('piano-key');

function playAudio(audio) {
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
}

piano.addEventListener('mousedown', function (event) {

	const dataLetter = event.target.dataset.letter;
	const audio = document.querySelector(`audio[data-letter="${dataLetter}"]`);

	event.target.classList.add('piano-key-active');

	window.addEventListener('mouseup', function () {
		event.target.classList.remove('piano-key-active');
	});

	playAudio(audio);
})

window.addEventListener('keydown', function (event) {
	if (event.code[0] === 'K') {
		const dataLetter = event.code[3];
		const audio = document.querySelector(`audio[data-letter="${dataLetter}"]`);
		playAudio(audio);
		const element = document.querySelector(`div[data-letter='${dataLetter}']`);
		if (element) {
			element.classList.add('piano-key-active');
			window.addEventListener('keyup', function (event) {
				element.classList.remove('piano-key-active');
			});
		}
	}
})