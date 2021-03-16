const piano = document.querySelector('.piano');

function playAudio(audio) {
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
}

piano.addEventListener('mousedown', function (event) {
	const dataLetter = event.target.dataset.letter;
	const audio = document.querySelector(`audio[data-letter="${dataLetter}"]`);

	event.target.classList.add('piano-key-active');
	event.target.addEventListener('mouseout', function () {
		event.target.classList.remove('piano-key-active')
	});
	window.addEventListener('mouseup', function () {
		event.target.classList.remove('piano-key-active');
	});
	playAudio(audio);
})



let isMouseDown;
piano.onmousedown = function () { isMouseDown = true; }
window.onmouseup = function () { isMouseDown = false; }

piano.addEventListener('mouseover', function (event) {
	if (isMouseDown) {
		const dataLetter = event.target.dataset.letter;
		const audio = document.querySelector(`audio[data-letter="${dataLetter}"]`);

		event.target.classList.add('piano-key-active');
		event.target.addEventListener('mouseout', function () {
			event.target.classList.remove('piano-key-active');
		});
		window.addEventListener('mouseup', function () {
			event.target.classList.remove('piano-key-active');
		});
		playAudio(audio);
	}
});



window.addEventListener('keydown', function (event) {
	if (event.code[0] === 'K') {
		const dataLetter = event.code[3];
		const audio = document.querySelector(`audio[data-letter="${dataLetter}"]`);

		if (!event.repeat) {
			playAudio(audio);
		}
		const element = document.querySelector(`div[data-letter='${dataLetter}']`);

		if (element) {
			element.classList.add('piano-key-active');
			window.addEventListener('keyup', function (event) {
				element.classList.remove('piano-key-active');
			});
		}
	}
});



const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
const pianoKeys = document.querySelectorAll('.piano-key');

btnLetters.addEventListener('click', function () {
	for (let pianoKey of pianoKeys) {
		pianoKey.classList.remove('piano-key-notes');
		pianoKey.classList.add('piano-key-letter');
	}
	btnLetters.classList.add('btn-active');
	btnNotes.classList.remove('btn-active');
});
btnNotes.addEventListener('click', function () {
	for (let pianoKey of pianoKeys) {
		pianoKey.classList.add('piano-key-notes');
		pianoKey.classList.remove('piano-key-letter');
	}
	btnLetters.classList.remove('btn-active');
	btnNotes.classList.add('btn-active');
});



document.querySelector('.openfullscreen').addEventListener('click', function () {
	document.documentElement.requestFullscreen();
});
document.querySelector('.openfullscreen').addEventListener('click', function () {
	document.exitFullscreen();
});