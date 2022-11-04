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
buttonColor();

let colorButton = document.createElement("button");
colorButton.innerHTML = "Cores aleatórias";
let body = document.querySelector("body");
body.appendChild(colorButton);
colorButton.addEventListener("click", buttonColor);


