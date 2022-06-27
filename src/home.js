const box = document.getElementById("box");
const title = document.createElement("h1");
title.id = "title";
title.innerText = "Hover";
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
const buttonLink = document.createElement("a");
buttonLink.href = "./selectDifficulty/select.html";
buttonLink.innerText = "start";
buttonLink.id = "button";

box.append(buttonLink);

const bestPlayers = document.createElement("a");
bestPlayers.href = "bestPlayers/index.html";
bestPlayers.id = "bestPlayers";
bestPlayers.innerText = "Best Players";
box.append(bestPlayers);

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
});
