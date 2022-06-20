const container = document.getElementById("container");

const bothDivs = document.createElement("div");
bothDivs.id = "bothDivs";
container.append(bothDivs);
const heartsDiv = document.createElement("div");
heartsDiv.id = "heartsDiv";
bothDivs.append(heartsDiv);

const heart1 = document.createElement("img");
heart1.classList.add("heart");
heart1.src = "https://data.whicdn.com/images/138547234/original.png";
heartsDiv.append(heart1);

const heart2 = document.createElement("img");
heart2.classList.add("heart");
heart2.src = "https://data.whicdn.com/images/138547234/original.png";
heartsDiv.append(heart2);

const heart3 = document.createElement("img");
heart3.classList.add("heart");
heart3.src = "https://data.whicdn.com/images/138547234/original.png";
heartsDiv.append(heart3);

const scoreDiv = document.createElement("div");
scoreDiv.id = "scoreDiv";
scoreDiv.innerText = "10000";
bothDivs.append(scoreDiv);

const character = document.createElement("div");
character.id = "character";
container.append(character);

const characterImg = document.createElement("img");
characterImg.src =
  "https://images.vexels.com/media/users/3/246496/isolated/preview/1372869684672eed3a4bfb37aa176ff4-sports-girl-pixel-art.png";
character.append(characterImg);
