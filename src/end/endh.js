const box = document.getElementById("box");
const numberOfLives = localStorage.getItem("numberOfLives");
const previousScore = JSON.parse(localStorage.getItem("previousScore"));
const title = document.createElement("h1");
title.id = "title";
title.innerText = "GAME OVER";
box.append(title);

const scoreBoard = document.createElement("p");
scoreBoard.id = "score";
box.append(scoreBoard);

const div = document.createElement("div");
div.id = "div";
box.append(div);
const retry = document.createElement("a");
retry.id = "retry";
retry.href = "../HardMode/hard.html";
retry.innerText = "Retry";
div.append(retry);
const home = document.createElement("a");
home.id = "home";
home.href = "../index.html";
home.innerText = "Return to Home";
div.append(home);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    retry.click();
    numberOfLives = 3;
    localStorage.setItem("numberOfLives", JSON.stringify(numberOfLives));
  }
});

const score = localStorage.getItem("score");
if (score !== null) {
  scoreBoard.textContent = "Score:" + score;
}
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
home.addEventListener("click", (numberOfLives) => {
  numberOfLives = 3;

  localStorage.setItem("numberOfLives", JSON.stringify(numberOfLives));
  localStorage.removeItem("previousScore");
});
