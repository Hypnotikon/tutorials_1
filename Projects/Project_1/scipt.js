const colorBTN = document.querySelector(".colorBTN");
const bodyBCG = document.querySelector("body");

const colors = ["yellow", "red", "green", "#535487"];

colorBTN.addEventListener("click", changeColor);

function changeColor() {
  bodyBCG.style.backgroundColor = "blue";
}
