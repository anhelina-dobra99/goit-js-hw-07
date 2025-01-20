const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");
function changeColor(event) {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const currentColor = body.style.backgroundColor = getRandomHexColor();
  span.textContent = currentColor;
}
changeColorButton.addEventListener("click", changeColor);

