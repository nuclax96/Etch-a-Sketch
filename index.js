const container = document.getElementById("container");
const gridSizeSelect = document.querySelector("#box-size");

let row, column;
const startGame = (size) => {
  generateGrid(size, size);

  addGridListeners();
};
const changeSize = (e) => {
  container.innerHTML = "";
  startGame(e.target.value);
};
gridSizeSelect.addEventListener("change", changeSize);

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
