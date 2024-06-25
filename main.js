import { initializePlayer } from "./playerControl.js";
import { updateClock } from "./clock.js";
import { showLoader, hideLoader } from "./loaderFunctions.js";
import { volumeController } from "./volumeControl.js";
import { updateProgressBar } from "./progressBar.js";
import "./eventHandlers.js"; // Event handlers will initialize   themselves
import "./uiControl.js"; // UI controls will initialize themselves
import "./selectHandlers.js";

document.addEventListener("DOMContentLoaded", () => {
  showLoader();
  setTimeout(hideLoader, 2000);
  initializePlayer();
  updateClock();
  setInterval(updateClock, 60000);
  setInterval(updateProgressBar, 1000);
});

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", volumeController);
