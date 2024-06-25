const box = document.getElementById("box");
const mainContainer = document.getElementById("mainContainer");
const back = document.createElement("a");
back.href = "../index.html";
box.append(back);
const img = document.createElement("img");
img.id = "img";
img.src = "https://img.icons8.com/ios-filled/50/undefined/left2.png";
img.addEventListener("click", function (e) {
  window.location.href = "../index.html";
});
mainContainer.append(img);
const gameMode = document.createElement("div");
gameMode.id = "gameMode";
gameMode.innerText = "Select game mode: ";
box.append(gameMode);
const boxOne = document.createElement("div");
boxOne.id = "boxOne";
box.append(boxOne);
const arrow1 = document.createElement("span");
arrow1.innerText = ">";
arrow1.id = "arrow1";
boxOne.append(arrow1);
const easy = document.createElement("a");
easy.id = "easy";
easy.href = "../EasyMode/easy.html";
easy.innerText = "Easy";
boxOne.append(easy);
const boxTwo = document.createElement("div");
boxTwo.id = "boxTwo";
box.append(boxTwo);
const arrow2 = document.createElement("span");
arrow2.innerText = ">";
arrow2.id = "arrow2";

boxTwo.append(arrow2);
const normal = document.createElement("a");
normal.id = "normal";
normal.href = "../gamePage/game.html";
normal.innerText = "Normal";
boxTwo.append(normal);
const boxThree = document.createElement("div");
boxThree.id = "boxThree";
box.append(boxThree);
const arrow3 = document.createElement("span");
arrow3.innerText = ">";
arrow3.id = "arrow3";
boxThree.append(arrow3);
const hard = document.createElement("a");
hard.id = "hard";
hard.href = "../HardMode/hard.html";
hard.innerText = "Hard";
boxThree.append(hard); // Constants for game mode URLs
const easyURL = "../EasyMode/easy.html";
const normalURL = "../gamePage/game.html";
const hardURL = "../HardMode/hard.html";

// Game mode elements
const easy1 = document.getElementById("easy");
const normal1 = document.getElementById("normal");
const hard1 = document.getElementById("hard");

// Audio element
const audio = new Audio(
  "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
);

document.addEventListener("keydown", function (e) {
  if (
    38 == e.keyCode &&
    arrow1.style.display === "flex" &&
    arrow2.style.display === "none" &&
    arrow3.style.display === "none"
  ) {
    audio.play();
    arrow1.style.display = "none";
    arrow3.style.display = "flex";
  } else if (38 == e.keyCode && arrow2.style.display === "flex") {
    audio.play();

    arrow2.style.display = "none";
    arrow1.style.display = "flex";
  } else if (38 == e.keyCode && arrow3.style.display === "flex") {
    audio.play();

    arrow2.style.display = "flex";
    arrow3.style.display = "none";
  } else if (40 == e.keyCode && arrow2.style.display === "flex") {
    audio.play();

    arrow2.style.display = "none";
    arrow3.style.display = "flex";
  } else if (40 == e.keyCode && arrow3.style.display === "flex") {
    audio.play();

    arrow2.style.display = "none";
    arrow3.style.display = "none";
    arrow1.style.display = "flex";
  } else if (40 == e.keyCode) {
    audio.play();

    arrow1.style.display = "none";
    arrow2.style.display = "flex";
  }
});

// Handle Enter key press for selection
// document.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     if (arrow1.style.display === "flex") {
//       easy.click();
//     } else if (arrow2.style.display === "flex") {
//       normal.click();
//     } else if (arrow3.style.display === "flex") {
//       hard.click();
//     }
//   }
// });

// Handle mode selection click events
easy1.addEventListener("click", () => {
  localStorage.setItem("numberOfLives", JSON.stringify(3));
  localStorage.removeItem("previousScore");
  localStorage.setItem("gameMode", "easy");

  window.location.href = easyURL;
});

normal1.addEventListener("click", () => {
  localStorage.setItem("numberOfLives", JSON.stringify(3));
  localStorage.removeItem("previousScore");
  localStorage.setItem("gameMode", "normal");

  window.location.href = normalURL;
});

hard1.addEventListener("click", () => {
  localStorage.setItem("numberOfLives", JSON.stringify(3));
  localStorage.setItem("gameMode", "hard");
  localStorage.removeItem("previousScore");
  window.location.href = hardURL;
});
document.addEventListener("keypress", (e) => {
  if (arrow1.style.display !== "none") {
    e.preventDefault();
    easy.click();
  } else if (e.key === "Enter" && arrow1.style.display === "flex") {
    e.preventDefault();
    easy.click();
  } else if (e.key === "Enter" && arrow2.style.display === "flex") {
    e.preventDefault();

    normal.click();
  } else if (e.key === "Enter" && arrow3.style.display === "flex") {
    e.preventDefault();

    hard.click();
  }
});
