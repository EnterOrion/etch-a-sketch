let color = "black";

function createGrid(size) {

let container = document.querySelector('.container');
let squares = container.querySelectorAll("div");
squares.forEach((div) => div.remove());
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let area = size * size;
for (let i = 0; i < area; i++) {
  let square = document.createElement("div");
  square.addEventListener("mousedown", fillColor);
  square.style.backgroundColor = "#ebdddd";
  container.insertAdjacentElement("beforeend", square);
}
}

createGrid(16);

function changeSize(input) {
  if (input > 64 ) {
    alert ("Size too big!\nMinimum size of 64!");
  }
  else if (input < 1) {
    alert ("Size too small! \nMinimum size of 1!");
  }
  else {
  createGrid(input);
  }
}

function fillColor() {
  let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  if (color == "rainbow") {
    this.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

  }
  else {
    this.style.backgroundColor = color;
  }
}

function changeColor(selection) {
    color = selection;
}


function clearBoard() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#ebdddd"));
}
