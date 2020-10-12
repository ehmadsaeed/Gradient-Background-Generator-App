const root = document.documentElement;
const h3 = document.querySelector('h3');
const colorInput1 = document.querySelector('.color1');
const colorInput2 = document.querySelector('.color2');
const body = document.querySelector('#gradient');
const button = document.querySelector('button');

const defaultColors = {
	color1: '#1488cc',
	color2: '#2b32b2'
}
let newColors = {};

/* Update CSS custom properties */
setRootColors = ({color1, color2}) => {
	root.style.setProperty('--color-1', color1);
	root.style.setProperty('--color-2', color2);
}

/* Update input values */
setInputValues = ({color1, color2}) => {
	colorInput1.value = color1;
	colorInput2.value = color2;
}

/* Display gradient value */
displayGradient = () => {
	h3.textContent = window.getComputedStyle(body).getPropertyValue('background-image');
}

/* Sets default colors */
setInitialColors = (inputColors) => {
	setRootColors(inputColors || defaultColors);
	setInputValues(inputColors || defaultColors);
	displayGradient();
};
setInitialColors();

/* Generate random hex color */
randomColor = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

/* Get input change and update colors */
inputChange = (event) => {
	if (Object.keys(newColors).length === 0) {
		newColors = { ...defaultColors };
	}
	newColors[event.target.name] = event.target.value;
	setRootColors(newColors);
}

/* Event listeners */

colorInput1.addEventListener('change', inputChange);

colorInput2.addEventListener('change', inputChange);

button.addEventListener('click', () => {
	newColors.color1 = randomColor()
	newColors.color2 = randomColor();
	setInitialColors(newColors);
});
