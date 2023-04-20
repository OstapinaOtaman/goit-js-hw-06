function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
	span: document.querySelector('.color'),
	btn: document.querySelector('.change-color'),
	bodyEl: document.querySelector('body'),
}

refs.btn.addEventListener('click', (e) => {
	refs.span.textContent = getRandomHexColor()
	refs.bodyEl.style.backgroundColor = refs.span.textContent
})

