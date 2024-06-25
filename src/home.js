

const box = document.getElementById("box");
const title = document.createElement("h1");
title.id = "title";
title.innerText = "ASTROFLOAT";
box.append(title);

const input = document.createElement("input");
input.id = "name";
input.type = "text";
input.classList.add("inputs");
input.required = true;
box.append(input);

const label = document.createElement("label");
label.id = "labelName";
label.htmlFor = "name";
box.append(label);
const enterName = document.createElement("span");
enterName.id = "infoOne";
enterName.innerText = "Enter Your Name";
label.append(enterName);
const both = document.createElement("div");
both.id = "both";
box.append(both);
const buttonLink = document.createElement("a");

buttonLink.innerText = "start";
buttonLink.id = "button";
both.append(buttonLink);

buttonLink.addEventListener("click", () => {
  if (input.value === "") {
    buttonLink.href = "";
    alert("Enter your name.");
  } else if (input.value !== "") {
    buttonLink.href = "selectDifficulty/select.html";
  }
});
const bestPlayers = document.createElement("a");
bestPlayers.href = "bestPlayers/index.html";
bestPlayers.id = "bestPlayers";
bestPlayers.innerText = "Best Scores";
both.append(bestPlayers);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    buttonLink.click();
  }
});
const previousScore = JSON.parse(localStorage.getItem("previousScore"));

buttonLink.addEventListener("click", () => {
  let score = 0;
  numberOfLives = 3;
  localStorage.setItem("numberOfLives", JSON.stringify(numberOfLives));
  localStorage.removeItem("previousScore");
  const playerName = input.value;
  localStorage.setItem("playerName", JSON.stringify(playerName));
});