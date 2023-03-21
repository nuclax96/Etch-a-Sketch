const container = document.getElementById("container");
const gridSizeSelect = document.querySelector("#box-size");

// Buttons reference
const clearBtn = document.querySelector(".clear");

let row, column;
const startGame = (size) => {
  eraseGrid();
  generateGrid(size, size);
  addGridListeners();
};

const eraseGrid = () => {
  const gridItems = document.querySelectorAll("#container div");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "";
  });
};
const changeSize = (e) => {
  container.innerHTML = "";
  startGame(e.target.value);
};

// Event Listeners

// 1. Grid size change event listener
gridSizeSelect.addEventListener("change", changeSize);

// 2. Grid Clear Evenet listener
clearBtn.addEventListener("click", eraseGrid);

const addGridListeners = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
};

const generateGrid = (rows = 16, cols = 16) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

startGame();
