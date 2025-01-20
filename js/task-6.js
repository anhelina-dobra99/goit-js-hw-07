const numberBox = document.querySelector(".number-box");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
createButton.addEventListener("click", event => {
  const boxCount = parseInt(numberBox.value);
  if (boxCount >= 1 && boxCount <= 100) {
     boxesContainer.innerHTML = ""; 
    createBoxes(boxCount);
  }
  numberBox.value = "";
});
destroyButton.addEventListener("click", event => {
  boxesContainer.innerHTML = "";
});
function createBoxes(boxCount) {
  const boxes = [];
  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
