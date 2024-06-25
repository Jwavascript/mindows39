import { makeDraggable } from "./draggable";

document.getElementById("start-win").onclick = function () {
  "use strict";
  if (document.getElementById("start-window-fade").style.opacity <= 0.1) {
    fadeInByMe(document.getElementById("start-window-fade"));
    fadeInByMe(document.getElementById("start-window"));
  } else if (document.getElementById("start-window-fade").style.opacity >= 1) {
    fadeOutByMe(document.getElementById("start-window-fade"));
    fadeOutByMe(document.getElementById("start-window"));
  }
};

document.getElementById("start-window-fade").onclick = function () {
  "use strict";
  fadeOutByMe(document.getElementById("start-window-fade"));
  fadeOutByMe(document.getElementById("start-window"));
};

// volume modal onclick
document.getElementById("taskbar__right").onclick = function () {
  let element = document.getElementById("start-volume");
  if (element.style.display == "none") element.style.display = "block";
  else element.style.display = "none";
  console.log("hello world");
};

// antivirus icon onclick
document.getElementById("antivirus").onclick = function () {
  let element = document.getElementById("av");
  if (element.style.display == "none") element.style.display = "block";
  else element.style.display = "none";
};
makeDraggable(
  document.getElementById("av"),
  document.querySelector(".av_header")
);

function fadeOutByMe(element) {
  "use strict";
  var opacity = 1,
    timer = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
        document
          .getElementById("container-start")
          .classList.remove("activecontainer");
      }
      element.style.opacity = opacity;
      opacity -= 0.1;
    }, 50);
}

function fadeInByMe(element) {
  "use strict";
  var opacity = 0.1,
    timer = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      if (opacity >= 0.5) {
        document
          .getElementById("container-start")
          .classList.add("activecontainer");
      }
      element.style.opacity = opacity;
      opacity += 0.1;
    }, 50);
  element.style.display = "block";
}
