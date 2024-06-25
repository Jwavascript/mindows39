import { player } from "./playerControl.js";
import { updateAvMessage } from "./avMessage.js";

const playBtn = document.querySelector("#play");
const jumpBtn = document.querySelector("#jump");
const pauseBtn = document.querySelector("#pause");
const rewindBtn = document.querySelector("#rewind");

playBtn.addEventListener("click", () => {
  console.log("clicked");
  updateAvMessage(player);
  player.video && player.requestPlay();
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
  const avContainer = document.getElementById("error-messages");
  avContainer.innerHTML = "";
  updateAvMessage(player);
});
