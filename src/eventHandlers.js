import { player } from "./playerControl.js";
import { updateAvMessage } from "./avMessage.js";
import { setCount } from "./animation.js";
import { getCount } from "./animation.js";

// handle functions about Control Panel(play music, jump etc)

const playBtn = document.querySelector("#play");
const jumpBtn = document.querySelector("#jump");
const pauseBtn = document.querySelector("#pause");
const rewindBtn = document.querySelector("#rewind");

playBtn.addEventListener("click", () => {
  player.video && player.requestPlay();
  updateAvMessage(player);
  // if terminated error is under 10, make wallpaper glitching
  if (getCount() < 10) {
    document.querySelector(".Playground__svg image").id = "my-image";
  }
});

// jump to next phrase
jumpBtn.addEventListener("click", () => {
  player.video &&
    player.requestMediaSeek(
      player.timer.position < player.video.firstPhrase.startTime
        ? player.video.firstPhrase.startTime
        : player.video.findPhrase(player.timer.position).endTime
    );
});

pauseBtn.addEventListener("click", () => {
  player.video && player.requestPause();
});

rewindBtn.addEventListener("click", () => {
  player.video && player.requestMediaSeek(0);
  const avContainer = document.getElementById("error_messages");
  setCount(0); // set terminated error to 0
  avContainer.innerHTML = "";
  updateAvMessage(player);
});
