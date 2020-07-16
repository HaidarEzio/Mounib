function createStars(type, quantity) {
  for (let i = 0; i < quantity; i++) {
    var star = document.createElement("div");
    star.classList.add("star", `type-${type}`);
    star.style.left = `${randomNumber(1, 99)}%`;
    star.style.bottom = `${randomNumber(1, 99)}%`;
    star.style.animationDuration = `${randomNumber(50, 200)}s`;
    document.body.appendChild(star);
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}
// * Making the stars only appeare on the desktops + tablets
if (screen.width > 425) {
  createStars(1, 30);
  createStars(2, 20);
  createStars(3, 30);
}
