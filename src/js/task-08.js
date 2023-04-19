const formRef = document.querySelector('.login-form');
console.dir(formRef);

// formRef.addEventListener('submit', onSubmit);

// function onSubmit(event) {
// 	event.preventDefault()
// 	console.log(event);
// }

formRef.addEventListener('submit', (event) => {
	event.preventDefault();
	const infoObj = {
		email: formRef.elements.email.value,
		password: formRef.elements.password.value,
	};

	if (
		formRef.elements.email.value === '' ||
		formRef.elements.password.value === ''
	) {
		return alert('Всі поля мають бути заповнені!');
	}
	console.log(infoObj);
	formRef.reset();
});