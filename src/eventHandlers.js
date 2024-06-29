import { player } from "./playerControl.js";
import { updateAvMessage } from "./avMessage.js";
import { setCount } from "./animation.js";
import { getCount } from "./animation.js";

const playBtn = document.querySelector("#play");
const jumpBtn = document.querySelector("#jump");
const pauseBtn = document.querySelector("#pause");
const rewindBtn = document.querySelector("#rewind");

playBtn.addEventListener("click", () => {
  console.log("clicked");
  updateAvMessage(player);
  player.video && player.requestPlay();
  if (getCount() < 10) {
    console.log("in");
    document.querySelector(".Playground__svg image").id = "my-image";
  }
});

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
  setCount(0);
  avContainer.innerHTML = "";
  updateAvMessage(player);
});
