import { initializePlayer } from "./src/playerControl.js";
import { updateClock } from "./src/clock.js";
import { showLoader, hideLoader } from "./src/loaderFunctions.js";
import { volumeController } from "./src/volumeControl.js";
import { updateProgressBar } from "./src/progressBar.js";
import "./src/eventHandlers.js"; // Event handlers will initialize   themselves
import "./src/uiControl.js"; // UI controls will initialize themselves
import "./src/selectHandlers.js";
import "./src/terminalMessage.js";

document.addEventListener("DOMContentLoaded", () => {
  initializePlayer();
  showLoader();
  setTimeout(hideLoader, 5000);
  updateClock();
  setInterval(updateClock, 60000);
  setInterval(updateProgressBar, 1000);
});

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", volumeController);
