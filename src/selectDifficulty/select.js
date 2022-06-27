const normal = document.getElementById("normal");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const previousScore = JSON.parse(localStorage.getItem("previousScore"));
normal.addEventListener("click", () => {
  numberOfLives = 3;
  localStorage.setItem("numberOfLives", JSON.stringify(numberOfLives));
  localStorage.removeItem("previousScore");
});
easy.addEventListener("click", () => {
  numberOfLives = 3;
  localStorage.setItem("numberOfLives", JSON.stringify(numberOfLives));
  localStorage.removeItem("previousScore");
});
hard.addEventListener("click", () => {
  numberOfLives = 3;
  localStorage.setItem("numberOfLives", JSON.stringify(numberOfLives));
  localStorage.removeItem("previousScore");
});
