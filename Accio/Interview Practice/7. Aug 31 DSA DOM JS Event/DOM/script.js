document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(document.querySelector('#textBox').value);
});
