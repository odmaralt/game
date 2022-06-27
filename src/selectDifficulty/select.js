const box = document.getElementById("box");
const back = document.createElement("a");
back.href = "../index.html";
box.append(back);
const img = document.createElement("img");
img.id = "img";
img.src = "https://img.icons8.com/ios-filled/50/undefined/left2.png";
back.append(img);
const gameMode = document.createElement("div");
gameMode.id = "gameMode";
gameMode.innerText = "Select game mode: ";
box.append(gameMode);
const boxOne = document.createElement("div");
boxOne.id = "boxOne";
box.append(boxOne);
const easy = document.createElement("a");
easy.id = "easy";
easy.href = "../EasyMode/easy.html";
easy.innerText = "Easy";
boxOne.append(easy)
const boxTwo = document.createElement("div");
boxTwo.id = "boxTwo";
box.append(boxTwo);
const normal = document.createElement("a");
normal.id = "normal";
normal.href = "../gamePage/game.html";
normal.innerText = "Normal";
boxOne.append(normal)
const boxThree = document.createElement("div");
boxThree.id = "boxThree";
box.append(boxThree);
const hard = document.createElement("a");
hard.id = "hard";
hard.href = "../HardMode/hard.html";
hard.innerText = "Hard";
boxThree.append(easy)

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