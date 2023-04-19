
const input = document.getElementById('font-size-control');
const span = document.getElementById('text');


span.style.fontSize = input.value;


input.addEventListener('input', (event) => {
	const fontSize = event.currentTarget.value;
	span.style.fontSize = `${fontSize}px`
}
)