const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map((ingredient) => {
	const listItem = document.createElement('li');
	listItem.textContent = ingredient;
	listItem.classList = 'item';

	return listItem;
});

ingredientsRef.append(...ingredientsArr);

console.log(ingredients)





