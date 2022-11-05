for (index = 1; index <= 4; index += 1) {
  const pallete = document.getElementById("color-palette");
  const colors = document.createElement('div');
  colors.classList.add("color");
  pallete.appendChild(colors);
}

const firtColor = document.querySelector(".color").style.backgroundColor = "black";

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomColor = () => [ 
  randomNumber(0,255),
  randomNumber(0,255),
  randomNumber(0,255)
];

const buttonColor = () => {
  for (index = 1; index <= 3; index += 1) {
    const rgb = randomColor();
    let color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    let textColor = color.toString();
    document.querySelectorAll(".color")[index].style.backgroundColor = textColor;
  }
}

const body = document.querySelector("body");
const bigBox = document.createElement('div');
body.appendChild(bigBox);
bigBox.id= "pixel-board";
for (index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add("pixel");
  bigBox.appendChild(pixel);
}

buttonColor();

let colorButton = document.createElement("button");
colorButton.id= "button-random-color";
colorButton.innerHTML = "Cores aleatórias";

body.appendChild(colorButton);
colorButton.addEventListener("click", buttonColor);

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
