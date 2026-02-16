/* ✨ Stars */
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.animationDuration = (1 + Math.random() * 2) + "s";
  document.body.appendChild(star);
}

/* ❤️ Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 1200);

/* 🌹 Flowers */
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌹";
  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.bottom = "0px";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 2000);
