import { Player, Ease } from "textalive-app-api";
import { contestSongs } from "./contestsong.js";
import { updateClock } from "./clock.js";

// Track lyrics from previous phases by adding global variables
let lastPhraseText = "";

const player = new Player({
  app: {
    token: "Fa7wvVkV0f24otvj",
  },
  mediaElement: document.querySelector("#media"),
});

player.addListener({
  onAppReady,
  onTimerReady,
  onTimeUpdate,
  onThrottledTimeUpdate,
});

const playBtn = document.querySelector("#play");
const jumpBtn = document.querySelector("#jump");
const pauseBtn = document.querySelector("#pause");
const rewindBtn = document.querySelector("#rewind");
const positionEl = document.querySelector("#position strong");

const artistSpan = document.querySelector("#artist span");
const songSpan = document.querySelector("#song span");
const phraseEl = document.querySelector("#container p");
const beatbarEl = document.querySelector("#beatbar");

// Loader functions
function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}

// Show loader on initial load
document.addEventListener("DOMContentLoaded", () => {
  showLoader();
  setTimeout(hideLoader, 2000); // Hide loader after 2 seconds
});

function onAppReady(app) {
  if (!app.managed) {
    playBtn.addEventListener("click", () => {
      console.log("clicked");
      updateAvMessage();
      player.video && player.requestPlay();
    });
    jumpBtn.addEventListener(
      "click",
      () =>
        player.video &&
        player.requestMediaSeek(
          player.timer.position < player.video.firstPhrase.startTime
            ? player.video.firstPhrase.startTime
            : player.video.findPhrase(player.timer.position).endTime
        )
    );
    pauseBtn.addEventListener(
      "click",
      () => player.video && player.requestPause()
    );
    rewindBtn.addEventListener("click", () => {
      player.video && player.requestMediaSeek(0);
      count = 0;
      const avContainer = document.getElementById("error-messages");
      avContainer.innerHTML = "";
      updateAvMessage();
    });
  }
  if (!app.songUrl) {
    player.createFromSongUrl(contestSongs[5].url, {
      video: contestSongs[5].video,
    });
  }
}

function onTimerReady() {
  // artistSpan.textContent = player.data.song.artist.name;
  // songSpan.textContent = player.data.song.name;

  if (!player.app.managed) {
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
  }

  let p = player.video.firstPhrase;
  jumpBtn.disabled = !p;

  // set `animate` method
  while (p && p.next) {
    p.animate = animatePhrase;
    p = p.next;
  }
}

function onTimeUpdate(position) {
  // show beatbar
  const beat = player.findBeat(position);
  if (!beat) {
    return;
  }
  beatbarEl.style.width = `${Math.ceil(
    Ease.circIn(beat.progress(position)) * 100
  )}%`;
}

function onThrottledTimeUpdate(position) {
  positionEl.textContent = String(Math.floor(position));
}

// Set Clock Update Interval (Every Minute)
updateClock(); // Set the clock immediately upon page loading
setInterval(updateClock, 60000);
// Volume Settings
var volumeSlider = document.getElementById("volumeSlider");
var lastVolumePosition;

function volumeController(e) {
  player.volume = volumeSlider.value * 100;
  lastVolumePosition = volumeSlider.value;
}

volumeSlider.addEventListener("input", volumeController);

// Antivirus div

const antivirusbutton = document.querySelector("#antivirus");
antivirusbutton.addEventListener("click", () => {
  document.querySelector(".av").classList.remove("hidden");
});

makeDraggable(
  document.querySelector(".av"),
  document.querySelector(".av_header")
);

let count = 0;
function updateAvMessage() {
  const phrasesLength = player.video.phrases.length;
  const avContainer = document.getElementById("error-messages");
  avContainer.innerHTML = ""; // Clear existing messages
  const avMessage = `${count} / ${phrasesLength}`;
  const avElement = document.createElement("div");
  avElement.textContent = avMessage;
  avContainer.appendChild(avElement);
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  if (!progressBar) return; // Ensure progressBar exists

  const maxTime = player.video.lastPhrase.endTime + 1000;
  const currentTime = Math.min(player.timer.position, maxTime);
  const percentage = Math.floor((currentTime / maxTime) * 100);

  progressBar.style.width = `${percentage}%`;

  console.log(maxTime);
  console.log(player.video.phrases.length);
  console.log(currentTime);

  if (currentTime >= maxTime && count < player.video.phrases.length) {
    console.log("hello");
    document
      .getElementById("fullscreen-message")
      .classList.add("fullscreen-visible");
  }
}

setInterval(updateProgressBar, 1000);

function animatePhrase(now, unit) {
  // show current phrase
  if (unit.contains(now)) {
    const currentText = unit.text;
    console.log(currentText);

    // Create a new div only when the lyrics are different from the previous phase
    if (currentText !== lastPhraseText) {
      // Copying Windows-style elements from a template
      const template = document.querySelector("#error-window-template");
      if (!template) return;
      const clone = template.content.cloneNode(true);

      // Set the current lyrics to the created element
      const windowBodyText = clone.querySelector(".window__body-text");
      if (!windowBodyText) return;
      windowBodyText.textContent = currentText;
      windowBodyText.dataset.glitch = currentText;

      // Place created window elements in the center of the screen
      const newWindow = clone.querySelector(".window");
      if (!newWindow) return;
      newWindow.style.position = "absolute";
      newWindow.style.left = `${50 + (Math.random() * 40 - 30)}vw`;
      newWindow.style.top = `${50 + (Math.random() * 40 - 30)}vh`;

      // Add the Windows element you created to the container
      document.querySelector("#container").appendChild(newWindow);

      // Set dragable
      makeDraggable(newWindow, newWindow.querySelector(".window_header"));

      // OK 버튼 클릭 시 윈도우 창 제거
      const okButton = newWindow.querySelector("[data-ok]");
      if (!okButton) return;
      okButton.addEventListener("click", () => {
        newWindow.remove();
        count++;
        updateAvMessage();
      });

      // 터치 이벤트를 추가하여 모바일에서 OK 버튼을 작동하게 함
      okButton.addEventListener("touchstart", () => {
        newWindow.remove();
        count++;
        updateAvMessage();
      });

      // 이전 phrase의 가사를 현재 phrase의 가사로 업데이트
      lastPhraseText = currentText;

      // 윈도우를 표시
      newWindow.hidden = false;
    }
  }
}

function makeDraggable(element, handle) {
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  // 공통 함수: 드래그 시작
  function startDragging(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
    startY = event.clientY || event.touches[0].clientY;
    const rect = element.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", stopDragging);

    event.preventDefault();
  }

  // 공통 함수: 드래그 중
  function dragElement(event) {
    if (isDragging) {
      const deltaX = (event.clientX || event.touches[0].clientX) - startX;
      const deltaY = (event.clientY || event.touches[0].clientY) - startY;
      element.style.left = `${startLeft + deltaX}px`;
      element.style.top = `${startTop + deltaY}px`;
    }
  }

  // 공통 함수: 드래그 종료
  function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", stopDragging);
  }

  // 마우스 이벤트 핸들러
  function onMouseMove(event) {
    dragElement(event);
  }

  // 터치 이벤트 핸들러
  function onTouchMove(event) {
    dragElement(event);
  }

  // 이벤트 리스너 추가
  handle.addEventListener("mousedown", startDragging);
  handle.addEventListener("touchstart", startDragging);
}

// Add event listener to media div
const superheroDiv = document.getElementById("superhero");
superheroDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    player.createFromSongUrl("https://piapro.jp/t/hZ35/20240130103028", {
      video: {
        beatId: 4592293,
        chordId: 2727635,
        repetitiveSegmentId: 2824326,
        lyricId: 59415,
        lyricDiffId: 13962,
      },
    });
    count = 0;
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage();

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("src/superhero.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#00A7C1";

    document.querySelector("#taskbar").style.backgroundColor = "#F56C11";
    hideLoader();
  }, 2000);
});

const ourfuturewithyouDiv = document.getElementById("ourfuturewithyou");
ourfuturewithyouDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    player.createFromSongUrl("https://piapro.jp/t/--OD/20240202150903", {
      video: {
        beatId: 4592296,
        chordId: 2727636,
        repetitiveSegmentId: 2824327,
        lyricId: 59416,
        lyricDiffId: 13963,
      },
    });
    count = 0;
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage();

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("src/ourfuturewithyou.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#08498B";

    document.querySelector("#taskbar").style.backgroundColor = "#08134B";
    hideLoader();
  }, 2000);
});

const futurenoteDiv = document.getElementById("futurenote");
futurenoteDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    player.createFromSongUrl("https://piapro.jp/t/XiaI/20240201203346", {
      video: {
        beatId: 4592297,
        chordId: 2727637,
        repetitiveSegmentId: 2824328,
        lyricId: 59417,
        lyricDiffId: 13964,
      },
    });
    count = 0;
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage();

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("src/futurenote.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#66619E";

    document.querySelector("#taskbar").style.backgroundColor = "#C960B5";
    hideLoader();
  }, 2000);
});

const miraisymphonyDiv = document.getElementById("miraisymphony");
miraisymphonyDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    player.createFromSongUrl("https://piapro.jp/t/Rejk/20240202164429", {
      video: {
        beatId: 4592298,
        chordId: 2727638,
        repetitiveSegmentId: 2824329,
        lyricId: 59418,
        lyricDiffId: 13965,
      },
    });
    count = 0;
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage();

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("src/miraisymphony.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#E9DBD2";

    document.querySelector("#taskbar").style.backgroundColor = "#44507F";
    hideLoader();
  }, 2000);
});

const realityDiv = document.getElementById("reality");
realityDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    player.createFromSongUrl("https://piapro.jp/t/ELIC/20240130010349", {
      video: {
        beatId: 4592299,
        chordId: 2727639,
        repetitiveSegmentId: 2824330,
        lyricId: 59419,
        lyricDiffId: 13966,
      },
    });
    count = 0;
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage();

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("src/reality.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#FFE3C4";

    document.querySelector("#taskbar").style.backgroundColor = "#5C5F56";
    hideLoader();
  }, 2000);
});

const themarksDiv = document.getElementById("themarks");
themarksDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    player.createFromSongUrl("https://piapro.jp/t/xEA7/20240202002556", {
      video: {
        beatId: 4592300,
        chordId: 2727640,
        repetitiveSegmentId: 2824331,
        lyricId: 59420,
        lyricDiffId: 13967,
      },
    });
    count = 0;
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage();

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("src/themarks.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#000000";

    document.querySelector("#taskbar").style.backgroundColor = "#4A929A";
    hideLoader();
  }, 2000);
});
