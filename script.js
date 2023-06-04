const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let userInput = input.value;
	if (userInput.length) {
		results = fruit.filter((word) => {
			return word.toLowerCase().includes(userInput.toLowerCase());	
		});
	}
	showSuggestions(results);
};

function searchHandler(e) {
	search();
}

function suggestionHighlight(e) {
	let suggestionHighlight = e.target.tagName;
	 document.querySelector('li').innerHTML = suggestionHighlight;
	return suggestionHighlight;
}

// const hoverSuggestion = content.target

/*function suggestionHighlight(e) {
	const hoveredSuggestion = e.target;
	const suggestions = Array.from(suggestions.querySelectorAll('li'));
}*/

function showSuggestions(results, inputVal) {
	let content = results.map((word) => {
		return `<li>${word}</li>`;
	})
	.join('');

	suggestions.innerHTML = `<ul>${content}</ul>`;
}

function useSuggestion(e) {
	const selectedSuggestion = e.target.textContent;
	input.value = selectedSuggestion;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseenter', (e) => {
e.target.style.backgroundColor = "yellow";
});
	console.log('Mouse entered!');
suggestions.addEventListener('mouseleave', (e) => {
	// Code to execute when the mouse leaves the element
	e.target.style.backgroundColor = '';
	console.log('Mouse left!');
  });
  