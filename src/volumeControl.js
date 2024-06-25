import { player } from "./playerControl.js";

export function volumeController() {
  const volumeSlider = document.getElementById("volumeSlider");
  player.volume = volumeSlider.value * 100;
}
