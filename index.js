const container = document.querySelector(".container");
const containerWidth = container.clientHeight;
for (let i = 0; i < 5; i++) {
  const dnode = document.createElement("div");
  container.appendChild(dnode);
  dnode.classList.add("grid-row");
  for (let j = 0; j < 5; j++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("grid-column");
    dnode.appendChild(childDiv);
    console.log(childDiv.classList);
  }
}
