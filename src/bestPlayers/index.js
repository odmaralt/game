const boxes = document.getElementById("boxes");
const tes = document.createElement("div");
tes.id = "top";
boxes.append(tes);
const goBack = document.createElement("a");
goBack.href = "../index.html";
tes.append(goBack);
const backImg = document.createElement("img");
backImg.id = "img";
backImg.src = "https://img.icons8.com/ios-filled/50/undefined/left2.png";
goBack.append(backImg);
const title = document.createElement("h1");
title.id = "title";
title.innerText = "Best Scores";
tes.append(title);
const box = document.createElement("div");
box.id = "box";
boxes.append(box);

const header = document.createElement("div");
header.id = "header";
box.append(header);
const names = document.createElement("h1");
names.id = "name";
names.innerText = "Name";
header.append(names);

const score = document.createElement("h1");
score.id = "score";
score.innerText = "Score";
header.append(score);

const mode = document.createElement("h1");
mode.id = "mode";
mode.innerText = "Mode";
header.append(mode);

const date = document.createElement("h1");
date.id = "date";
date.innerText = "Date";
header.append(date);
const all = document.createElement("div");
all.id = "all";
box.append(all);
const allNames = document.createElement("div");
allNames.id = "allNames";
all.append(allNames);
const allScores = document.createElement("div");
allScores.id = "allScores";
all.append(allScores);
const allModes = document.createElement("div");
allModes.id = "allModes";
all.append(allModes);

const allDates = document.createElement("div");
allDates.id = "allDates";
all.append(allDates);

// const name1 = document.createElement("p")
// name1.id="name1"
// allPlayers.append(name1)
// const score1 = document.createElement("p")
// score1.id="score1"
// allPlayers.append(score1)
// const mode1 = document.createElement("p")
// mode1.id="mode1"
// allPlayers.append(mode1)
// const date1 = document.createElement("p")
// date1.id="date1"
// allPlayers.append(date1)