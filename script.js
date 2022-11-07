// Criando paleta de cores

for (let index = 1; index <= 4; index += 1) {
  const pallete = document.getElementById('color-palette');
  const colors = document.createElement('div');
  colors.classList.add('color');
  pallete.appendChild(colors);
}

//  Definindo cor preta como cor padrao

const selectedColor = document.querySelector('.color');
selectedColor.style.backgroundColor = 'black';
selectedColor.classList.add('selected');

// Definindo numero aleatorio

const randomNumber = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

// Definindo RGB aleatorio

const randomColor = () => [
  randomNumber(0, 255),
  randomNumber(0, 255),
  randomNumber(0, 255),
];

// Criando grade de pixels

const body = document.querySelector('body');
const bigBox = document.createElement('div');
body.appendChild(bigBox);
bigBox.id = 'pixel-board';
for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  bigBox.appendChild(pixel);
}

// Definindo funcao para o botao gerar cores aleatorias

const buttonColor = () => {
  for (let index = 1; index <= 3; index += 1) {
    const rgb = randomColor();
    const color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    const textColor = color.toString();
    document.querySelectorAll('.color')[index].style.backgroundColor = textColor;
  }
};
buttonColor();

// Criando botao para cores aleatorias

const colorButton = document.createElement('button');
colorButton.id = 'button-random-color';
colorButton.innerHTML = 'Cores aleatórias';

body.appendChild(colorButton);
colorButton.addEventListener('click', buttonColor);

// Criando funcao para selecionar cor na paleta

const paletteColors = document.querySelectorAll('.color');

for (let index = 0; index < paletteColors.length; index += 1) {
  paletteColors[index].addEventListener('click', recebeClick);
}

function recebeClick(eventoDeOrigem) {
  let myTarget = eventoDeOrigem.target;
    document.querySelector('.selected').classList.remove('selected');
    myTarget.classList.add('selected');
}

// Criando funcao para preencher um pixel com a cor selecionada

const pixelsArt = document.querySelectorAll('.pixel');

for (let index = 0; index < pixelsArt.length; index += 1) {
  pixelsArt[index].addEventListener('click', paintPixel);
}

function paintPixel(eventOrigin) {
  let recentColor = document.querySelector('.selected').style.backgroundColor;
  let myPixelTarget = eventOrigin.target;
  myPixelTarget.style.backgroundColor = recentColor;
}

// Criando botao que retorne a cor do quadro

function clearFrame () {
  const defaultColor = document.querySelectorAll('.pixel');
for (i = 0; i < defaultColor.length; i += 1) {
  defaultColor[i].style.backgroundColor = 'white';
}
}
clearFrame();

const clearButton = document.getElementById('clear-button');
const defaultColorButton = document.createElement('button');
defaultColorButton.id = 'clear-board';
defaultColorButton.innerHTML = 'Limpar'
clearButton.appendChild(defaultColorButton);

clearButton.addEventListener('click', clearFrame);










// let storage = () => {
//   for (let index = 1; index <= 3; index += 1) {
//   let saveColors = (document.querySelectorAll(".color")[index].style.backgroundColor)
//   let arrayColors = [];
//   arrayColors.push(saveColors);
//   console.log(arrayColors);
//   // localStorage.setItem("colorPalette", saveColors);
// }
// }
// storage();

// let saveColor = () => {
//   for (index)
// }

// window.onload = function () {
// if (localStorage.length > 0) {
//   // let textColor = JSON.parse(localStorage.getItem("colorPalette"));
//   console.log(textColor);
// }
// }
