const box = document.getElementById("box");
const title = document.createElement("h1");
title.id = "title";
title.innerText = "You Died";
box.append(title);

const score = document.createElement("p");
score.id = "score";
score.innerText = "Score: 10000";
box.append(score);

const button = document.createElement("button");
button.id = "button";
box.append(button);

const retry = document.createElement("a");
retry.id = "retry";
retry.href = "../gamePage/game.html";
retry.innerText = "RETRY";
button.append(retry);
const home = document.createElement("a");
home.id = "home";
home.href = "../home.html";
home.innerText = "Return to Home";
box.append(home);
