import { player } from "./playerControl.js";
import { showLoader, hideLoader } from "./loaderFunctions.js";
import { setCount } from "./animation.js";
import { updateAvMessage } from "./avMessage.js";
import { resetPhrase } from "./animation.js";

// Loads the selected song into the player and updates the UI.

// song : Superhero

const superheroDiv = document.getElementById("superhero");
superheroDiv.addEventListener("click", () => {
  // stop current song
  player.requestStop();

  // set currentPhrase to empty
  resetPhrase();

  // Remove the glitch if the wallpaper has a glitch effect
  document.querySelector(".Playground__svg image").removeAttribute("id");

  // Remove all error windows in container
  document.querySelector("#container").innerHTML = "";

  // load playlist song
  player.createFromSongUrl("https://piapro.jp/t/hZ35/20240130103028", {
    video: {
      beatId: 4592293,
      chordId: 2727635,
      repetitiveSegmentId: 2824326,
      lyricId: 59415,
      lyricDiffId: 13962,
    },
  });
  // show loader for 2000ms
  showLoader();
  setTimeout(() => {
    // set error count to zero
    setCount(0);
    // update internal elements of antivirus ui
    const avContainer = document.getElementById("error_messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    // update color of ui
    const body = document.querySelector("body");
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#00A7C1";

    document.querySelector("#play > img").src = "assets/icons/play_black.svg";
    document.querySelector("#pause > img").src = "assets/icons/pause_black.svg";
    document.querySelector("#jump > img").src = "assets/icons/jump_black.svg";
    document.querySelector("#rewind > img").src =
      "assets/icons/rewind_black.svg";
    document.querySelector("#antivirus > img").src =
      "assets/icons/antivirus_black.svg";
    document.querySelector("#mail > img").src = "assets/icons/mail_black.svg";

    document.querySelector("#taskbar").style.backgroundColor = "#F56C11";
    hideLoader();
  }, 2000);
});

// Details are as above
// song : ourfuturewithyou
const ourfuturewithyouDiv = document.getElementById("ourfuturewithyou");
ourfuturewithyouDiv.addEventListener("click", () => {
  player.requestStop();
  resetPhrase();
  document.querySelector(".Playground__svg image").removeAttribute("id");
  document.querySelector("#container").innerHTML = "";

  player.createFromSongUrl("https://piapro.jp/t/--OD/20240202150903", {
    video: {
      beatId: 4592296,
      chordId: 2727636,
      repetitiveSegmentId: 2824327,
      lyricId: 59416,
      lyricDiffId: 13963,
    },
  });
  showLoader();
  setTimeout(() => {
    setCount(0);
    const avContainer = document.getElementById("error_messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";

    document.querySelector("#play > img").src =
      "https://jolly-duckanoo-52ac00.netlify.app/assets/icons/play_white.svg";
    document.querySelector("#pause > img").src = "assets/icons/pause_white.svg";
    document.querySelector("#jump > img").src = "assets/icons/jump_white.svg";
    document.querySelector("#rewind > img").src =
      "assets/icons/rewind_white.svg";
    document.querySelector("#antivirus > img").src =
      "assets/icons/antivirus_white.svg";
    document.querySelector("#mail > img").src = "assets/icons/mail_white.svg";
    body.style.backgroundColor = "#08498B";

    document.querySelector("#taskbar").style.backgroundColor = "#08134B";
    hideLoader();
  }, 2000);
});

// song : future note
const futurenoteDiv = document.getElementById("futurenote");

futurenoteDiv.addEventListener("click", () => {
  player.requestStop();
  resetPhrase();
  document.querySelector(".Playground__svg image").removeAttribute("id");
  document.querySelector("#container").innerHTML = "";

  player.createFromSongUrl("https://piapro.jp/t/XiaI/20240201203346", {
    video: {
      beatId: 4592297,
      chordId: 2727637,
      repetitiveSegmentId: 2824328,
      lyricId: 59417,
      lyricDiffId: 13964,
    },
  });
  showLoader();
  setTimeout(() => {
    setCount(0);

    const avContainer = document.getElementById("error_messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#66619E";

    document.querySelector("#play > img").src = "assets/icons/play.svg";
    document.querySelector("#pause > img").src = "assets/icons/pause.svg";
    document.querySelector("#jump > img").src = "assets/icons/jump.svg";
    document.querySelector("#rewind > img").src = "assets/icons/rewind.svg";
    document.querySelector("#antivirus > img").src =
      "assets/icons/antivirus.svg";
    document.querySelector("#mail > img").src = "assets/icons/mail.svg";

    document.querySelector("#taskbar").style.backgroundColor = "#C960B5";
    hideLoader();
  }, 2000);
});

// song : mirai symphony
const miraisymphonyDiv = document.getElementById("miraisymphony");
miraisymphonyDiv.addEventListener("click", () => {
  player.requestStop();
  resetPhrase();
  document.querySelector(".Playground__svg image").removeAttribute("id");
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

    const avContainer = document.getElementById("error_messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";

    document.querySelector("#play > img").src = "assets/icons/play.svg";
    document.querySelector("#pause > img").src = "assets/icons/pause.svg";
    document.querySelector("#jump > img").src = "assets/icons/jump.svg";
    document.querySelector("#rewind > img").src = "assets/icons/rewind.svg";
    document.querySelector("#antivirus > img").src =
      "assets/icons/antivirus.svg";
    document.querySelector("#mail > img").src = "assets/icons/mail.svg";
    body.style.backgroundColor = "#E9DBD2";

    document.querySelector("#taskbar").style.backgroundColor = "#44507F";
    hideLoader();
  }, 2000);
});

// song : reality
const realityDiv = document.getElementById("reality");
realityDiv.addEventListener("click", () => {
  player.requestStop();
  resetPhrase();
  document.querySelector(".Playground__svg image").removeAttribute("id");
  document.querySelector("#container").innerHTML = "";

  player.createFromSongUrl("https://piapro.jp/t/ELIC/20240130010349", {
    video: {
      beatId: 4592299,
      chordId: 2727639,
      repetitiveSegmentId: 2824330,
      lyricId: 59419,
      lyricDiffId: 13966,
    },
  });
  showLoader();
  setTimeout(() => {
    setCount(0);

    const avContainer = document.getElementById("error_messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);

    const body = document.querySelector("body");
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#FFE3C4";

    document.querySelector("#play > img").src = "assets/icons/play.svg";
    document.querySelector("#pause > img").src = "assets/icons/pause.svg";
    document.querySelector("#jump > img").src = "assets/icons/jump.svg";
    document.querySelector("#rewind > img").src = "assets/icons/rewind.svg";
    document.querySelector("#antivirus > img").src =
      "assets/icons/antivirus.svg";
    document.querySelector("#mail > img").src = "assets/icons/mail.svg";

    document.querySelector("#taskbar").style.backgroundColor = "#5C5F56";
    hideLoader();
  }, 2000);
});

// song : the marks
const themarksDiv = document.getElementById("themarks");
themarksDiv.addEventListener("click", () => {
  player.requestStop();
  resetPhrase();
  document.querySelector(".Playground__svg image").removeAttribute("id");
  document.querySelector("#container").innerHTML = "";

  player.createFromSongUrl("https://piapro.jp/t/xEA7/20240202002556", {
    video: {
      beatId: 4592300,
      chordId: 2727640,
      repetitiveSegmentId: 2824331,
      lyricId: 59420,
      lyricDiffId: 13967,
    },
  });
  showLoader();
  setTimeout(() => {
    setCount(0);

    const avContainer = document.getElementById("error_messages");
    avContainer.innerHTML = "";
    updateAvMessage(player);
    const body = document.querySelector("body");
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundColor = "#000000";

    document.querySelector("#play > img").src = "assets/icons/play.svg";
    document.querySelector("#pause > img").src = "assets/icons/pause.svg";
    document.querySelector("#jump > img").src = "assets/icons/jump.svg";
    document.querySelector("#rewind > img").src = "assets/icons/rewind.svg";
    document.querySelector("#antivirus > img").src =
      "assets/icons/antivirus.svg";
    document.querySelector("#mail > img").src = "assets/icons/mail.svg";

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
