function createGrid(size) {

let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.style.backgroundColor = "blue";
  container.insertAdjacentElement("beforeend", square);
}
}

createGrid(16);

function changeSize(input) {
  createGrid(input);
}



//.container.innerHTML =
  //  .cell.onclick = () => alert("Hello world");


//let i=0, n=16;

//container.innerHTML = 
 //   `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
   // .repeat(n)    


