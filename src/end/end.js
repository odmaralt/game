const box = document.getElementById("box");
const title = document.createElement("h1");
title.id = "title";
box.append(title);

const game = document.createElement("span");
game.innerText = "GAME ";
game.classList.add("words");
const over = document.createElement("span");
over.innerText = " OVER";
over.classList.add("words");
title.append(game);
title.append(over);

const scoreBoard = document.createElement("p");
scoreBoard.id = "score";
box.append(scoreBoard);

const div = document.createElement("div");
div.id = "div";
box.append(div);
const retry = document.createElement("a");
retry.id = "retry";
retry.innerText = "Retry";
div.append(retry);
const home = document.createElement("a");
home.id = "home";
home.innerText = "Home";
div.append(home);

document.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    await retry.click();
  }
});

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

// Initialize the score to 0 if it doesn't exist in local storage
if (localStorage.getItem("score") === null) {
  localStorage.setItem("score", "0");
}

// Get the player's score
const score = localStorage.getItem("score");
scoreBoard.textContent = "Score: " + score;

const playerName = localStorage.getItem("playerName");
