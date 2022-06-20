const box = document.getElementById("box");
const title = document.createElement("h1");
title.id = "title";
title.innerText = "Jetpack Boy";
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
const button = document.createElement("button");
button.id = "button";

box.append(button);

const buttonLink = document.createElement("a");
buttonLink.href = "./gamePage/game.html";
buttonLink.innerText = "start";
buttonLink.id = "button";

button.append(buttonLink);

const bestPlayers = document.createElement("a");
bestPlayers.href = "bestPlayers/index.html";
bestPlayers.id = "bestPlayers";
bestPlayers.innerText = "Best Players";
box.append(bestPlayers);
