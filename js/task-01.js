const listOfCategories = document.getElementById('categories');
console.log(`Number of categories: ${listOfCategories.children.length}`);

const listWithClasses = document.querySelectorAll('.item');

listWithClasses.forEach((listEl) => {
	// console.dir(listEl)
	console.log('');
	console.log(`Category: ${listEl.firstElementChild.textContent}`);
	console.log(
		`Elements: ${listEl.lastElementChild.children.length}`
	);
});


// const listWithClass = document.querySelectorAll('.item');
// console.log(`Number of categories: ${listWithClass.length}`);

// listWithClass.forEach((listEl) => {
// 	console.log('');
// 	console.log(`Category: ${listEl.firstElementChild.textContent}`);
// 	console.log(
// 		`Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`
// 	);
// });

