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
} else {
  createStars(1, 20);
  createStars(2, 10);
  createStars(3, 20);
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
//////////////////? GALLERY RESIZING ALGORITHM 2

var popup = document.querySelector("#popup");
var getValue = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getH = function (item) {
  return item.querySelector(".popup__content").getBoundingClientRect().height;
};
var resize = function () {
  var altura = getValue(popup, "grid-auto-rows");
  var gap = getValue(popup, "grid-row-gap");
  popup.querySelectorAll(".popup__item").forEach(function (item) {
    var el = item;
    el.style.gridRowEnd = "span " + Math.ceil((getH(item) + gap) / (altura + gap));
  });
};
popup.querySelectorAll("img").forEach(function (item) {
  item.classList.add("popup__byebye");
  if (item.complete) {
    console.log(item.src);
  } else {
    item.addEventListener("load", function () {
      var altura = getValue(popup, "grid-auto-rows");
      var gap = getValue(popup, "grid-row-gap");
      var gitem = item.parentElement.parentElement;
      gitem.style.gridRowEnd = "span " + Math.ceil((getH(gitem) + gap) / (altura + gap));
      item.classList.remove("popup__byebye");
    });
  }
});
window.addEventListener("resize", resize);

//////////////////? GALLERY RESIZING ALGORITHM 2
//////////////////* GALLERY RESIZING ALGORITHM 3
function poped() {
  var poped = document.querySelector("#poped");
  var getValue = function (elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
  };
  var getH = function (item) {
    return item.querySelector(".poped__content").getBoundingClientRect().height;
  };
  var resize = function () {
    var altura = getValue(poped, "grid-auto-rows");
    var gap = getValue(poped, "grid-row-gap");
    poped.querySelectorAll(".poped__item").forEach(function (item) {
      var el = item;
      el.style.gridRowEnd = "span " + Math.ceil((getH(item) + gap) / (altura + gap));
    });
  };
  poped.querySelectorAll("img").forEach(function (item) {
    item.classList.add("poped__byebye");
    if (item.complete) {
      console.log(item.src);
    } else {
      item.addEventListener("load", function () {
        var altura = getValue(poped, "grid-auto-rows");
        var gap = getValue(poped, "grid-row-gap");
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil((getH(gitem) + gap) / (altura + gap));
        item.classList.remove("poped__byebye");
      });
    }
  });
  window.addEventListener("resize", resize);
}
poped();
//////////////////* GALLERY RESIZING ALGORITHM 3
//////////////////? GALLERY RESIZING ALGORITHM 4
function pop() {
  var pop = document.querySelector("#pop");
  var getValue = function (elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
  };
  var getH = function (item) {
    return item.querySelector(".pop__content").getBoundingClientRect().height;
  };
  var resize = function () {
    var altura = getValue(pop, "grid-auto-rows");
    var gap = getValue(pop, "grid-row-gap");
    pop.querySelectorAll(".pop__item").forEach(function (item) {
      var el = item;
      el.style.gridRowEnd = "span " + Math.ceil((getH(item) + gap) / (altura + gap));
    });
  };
  pop.querySelectorAll("img").forEach(function (item) {
    item.classList.add("pop__byebye");
    if (item.complete) {
      console.log(item.src);
    } else {
      item.addEventListener("load", function () {
        var altura = getValue(pop, "grid-auto-rows");
        var gap = getValue(pop, "grid-row-gap");
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil((getH(gitem) + gap) / (altura + gap));
        item.classList.remove("pop__byebye");
      });
    }
  });
  window.addEventListener("resize", resize);
}
pop();
//////////////////? GALLERY RESIZING ALGORITHM 4
