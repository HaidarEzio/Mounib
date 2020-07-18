//////////////////! STARS
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
//* Making the stars only appeare on the desktops + tablets
if (screen.width > 425) {
  createStars(1, 30);
  createStars(2, 20);
  createStars(3, 30);
}
//////////////////! STARS
//////////////////* GALLERY RESIZING ALGORITHM
var gallery = document.querySelector("#gallery");
var getVal = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
  return item.querySelector(".content").getBoundingClientRect().height;
};
var resizeAll = function () {
  var altura = getVal(gallery, "grid-auto-rows");
  var gap = getVal(gallery, "grid-row-gap");
  gallery.querySelectorAll(".gallery-item").forEach(function (item) {
    var el = item;
    el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
  });
};
gallery.querySelectorAll("img").forEach(function (item) {
  item.classList.add("byebye");
  if (item.complete) {
    console.log(item.src);
  } else {
    item.addEventListener("load", function () {
      var altura = getVal(gallery, "grid-auto-rows");
      var gap = getVal(gallery, "grid-row-gap");
      var gitem = item.parentElement.parentElement;
      gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
      item.classList.remove("byebye");
    });
  }
});
window.addEventListener("resize", resizeAll);

//////////////////* GALLERY RESIZING ALGORITHM

//! gallery.querySelectorAll(".gallery-item").forEach(function (item) {
// !  item.addEventListener("click", function () {
// !    item.classList.toggle("full");
// !  });
// !});
// !if (gallery.querySelector("full")) {
// !  item.classList.remove("full");
//! }
