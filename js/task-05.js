const ref = {
	input: document.getElementById('name-input'),
	output: document.getElementById('name-output'),
};

ref.input.addEventListener('input', onInputChange);

function onInputChange(e) {
	const inputValue = e.target.value.trim();
	ref.output.textContent = inputValue ? inputValue : 'Anonymous';
}


