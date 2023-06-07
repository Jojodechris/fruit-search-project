var colors = new Array(
	[62,35,255],
	[60,255,60],
	[255,35,98],
	[45,175,230],
	[255,0,255],
	[255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
	
	if ( $===undefined ) return;
	
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
	 background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
	  background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
	
	step += gradientSpeed;
	if ( step >= 1 )
	{
	  step %= 1;
	  colorIndices[0] = colorIndices[1];
	  colorIndices[2] = colorIndices[3];
	  
	  //pick two new target color indices
	  //do not pick the same as the current one
	  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  
	}
  }
  
  setInterval(updateGradient,10);

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
e.target.style.backgroundColor = linear-gradient ('#e66465', '#9198e5');
});
	console.log('Mouse entered!');
suggestions.addEventListener('mouseleave', (e) => {
	// Code to execute when the mouse leaves the element
	e.target.style.backgroundColor = '';
	console.log('Mouse left!');
  });
  

  