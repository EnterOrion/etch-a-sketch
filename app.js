function createGrid(size) {

let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let area = size * size;
for (let i = 0; i < area; i++) {
  let square = document.createElement("div");
  square.addEventListener("mousedown", fillColor);
  square.style.backgroundColor = "blue";
  container.insertAdjacentElement("beforeend", square);
}
}

createGrid(16);

function changeSize(input) {
  if (input > 64 ) {
    alert ("Size too big!");
  }
  else if (input < 1) {
    alert ("Size too small!");
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
