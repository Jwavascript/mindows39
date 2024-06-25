import { player } from "./playerControl.js";
import { updateAvMessage } from "./avMessage.js";
import { showLoader, hideLoader } from "./loaderFunctions.js";
import { setCount } from "./animation.js";

const superheroDiv = document.getElementById("superhero");
superheroDiv.addEventListener("click", () => {
  player.requestPause();
  document.querySelector("#container").innerHTML = "";

  showLoader();
  setTimeout(() => {
    setCount(0);
    player.createFromSongUrl("https://piapro.jp/t/hZ35/20240130103028", {
      video: {
        beatId: 4592293,
        chordId: 2727635,
        repetitiveSegmentId: 2824326,
        lyricId: 59415,
        lyricDiffId: 13962,
      },
    });

    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("./assets/backgrounds/superhero.jpg")';
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
    setCount(0);
    player.createFromSongUrl("https://piapro.jp/t/--OD/20240202150903", {
      video: {
        beatId: 4592296,
        chordId: 2727636,
        repetitiveSegmentId: 2824327,
        lyricId: 59416,
        lyricDiffId: 13963,
      },
    });
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundImage =
      'url("./assets/backgrounds/ourfuturewithyou.jpg")';
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
    setCount(0);
    player.createFromSongUrl("https://piapro.jp/t/XiaI/20240201203346", {
      video: {
        beatId: 4592297,
        chordId: 2727637,
        repetitiveSegmentId: 2824328,
        lyricId: 59417,
        lyricDiffId: 13964,
      },
    });
    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("./assets/backgrounds/futurenote.jpg")';
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
    setCount(0);
    player.createFromSongUrl("https://piapro.jp/t/Rejk/20240202164429", {
      video: {
        beatId: 4592298,
        chordId: 2727638,
        repetitiveSegmentId: 2824329,
        lyricId: 59418,
        lyricDiffId: 13965,
      },
    });

    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundImage =
      'url("./assets/backgrounds/miraisymphony.jpg")';
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
    setCount(0);
    player.createFromSongUrl("https://piapro.jp/t/ELIC/20240130010349", {
      video: {
        beatId: 4592299,
        chordId: 2727639,
        repetitiveSegmentId: 2824330,
        lyricId: 59419,
        lyricDiffId: 13966,
      },
    });

    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url(url("./assets/backgrounds/reality.jpg"))';
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
    setCount(0);
    player.createFromSongUrl("https://piapro.jp/t/xEA7/20240202002556", {
      video: {
        beatId: 4592300,
        chordId: 2727640,
        repetitiveSegmentId: 2824331,
        lyricId: 59420,
        lyricDiffId: 13967,
      },
    });

    const avContainer = document.getElementById("error-messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundImage = 'url("./assets/backgrounds/themarks.jpg")';
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#000000";

    document.querySelector("#taskbar").style.backgroundColor = "#4A929A";
    hideLoader();
  }, 2000);
});

export {
  superheroDiv,
  ourfuturewithyouDiv,
  futurenoteDiv,
  miraisymphonyDiv,
  realityDiv,
  themarksDiv,
};
