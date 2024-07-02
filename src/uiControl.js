import { makeDraggable } from "./draggable";

// Playlist modal On and Off
document.getElementById("start_win").onclick = function () {
  "use strict";
  if (document.getElementById("start_window").style.opacity <= 0.1) {
    fadeInByMe(document.getElementById("start_window"));
  } else if (document.getElementById("start_window").style.opacity >= 1) {
    fadeOutByMe(document.getElementById("start_window"));
  }
};

// Volume modal On and Off
document.getElementById("taskbar_right").onclick = function () {
  let element = document.getElementById("start_volume");
  if (element.style.display == "none") element.style.display = "block";
  else element.style.display = "none";
};
document.querySelector("#container").onclick = function () {
  fadeOutByMe(document.getElementById("start_window"));
  let element = document.getElementById("start_volume");
  element.style.display = "none";
};

// Antivirus Icon On, Off, draggable
document.getElementById("antivirus").onclick = function () {
  let element = document.getElementById("av");
  element.style.display = "block";
};
makeDraggable(
  document.getElementById("av"),
  document.querySelector(".av_header")
);

document.querySelector(".av_close").addEventListener("click", () => {
  let element = document.getElementById("av");
  element.style.display = "none";
});
document.querySelector(".av_close").addEventListener("touchstart", () => {
  let element = document.getElementById("av");
  element.style.display = "none";
});

// make Notepad Ui draagable
makeDraggable(
  document.getElementById("notepad"),
  document.querySelector(".notepad_header")
);

//playlist modal fade effect
function fadeOutByMe(element) {
  "use strict";
  var opacity = 1,
    timer = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
        document
          .getElementById("container_start")
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
          .getElementById("container_start")
          .classList.add("activecontainer");
      }
      element.style.opacity = opacity;
      opacity += 0.1;
    }, 50);
  element.style.display = "block";
}
