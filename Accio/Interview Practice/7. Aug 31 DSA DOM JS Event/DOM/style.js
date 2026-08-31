let input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
	// event is triggered when key is down
	// does not work for function keys
	console.log('keydown', e);
	console.log(e.key);
	if (e.repeat) {
		console.log("You've not removed your finger from keyboard");
	}
	console.log(e.code); // which key has been pressed on keyboard
});
