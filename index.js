const container = document.getElementById("container");
const gridSizeSelect = document.querySelector("#box-size");

// Buttons reference
const clearBtn = document.querySelector(".clear");
const randomClrBtn = document.querySelector(".random");
const blackClrBtn = document.querySelector(".black");

let row, column;
const startGame = (size) => {
  eraseGrid();
  generateGrid(size, size);
  changeMode();
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

// Get random Color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(getRandomColor());

const changeMode = (colors = "black") => {
  eraseGrid();
  const gridItems = document.querySelectorAll(".grid-item");
  if (colors === "black") {
    gridItems.forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
    });
  }
  if (colors === "random") {
    gridItems.forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = getRandomColor();
      });
    });
  }
};

// Event Listeners

// 1. Grid size change event listener
gridSizeSelect.addEventListener("change", changeSize);

// 2. Grid Clear Evenet listener
clearBtn.addEventListener("click", eraseGrid);

// 3. Change color to random
randomClrBtn.addEventListener("click", (e) => {
  changeMode("random");
});

// 4. Change color to black
blackClrBtn.addEventListener("click", (e) => {
  changeMode("black");
});

const generateGrid = (rows = 16, cols = 16) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

startGame();
