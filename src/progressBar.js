import { player } from "./playerControl.js";
import { getCount } from "./animation.js";

// handle Progress bar on Antivirus Ui, handle related event

export function updateProgressBar() {
  const progressBar = document.getElementById("progress_bar");
  if (!progressBar) return;

  const maxTime = player.video.lastPhrase.endTime + 1000;
  const currentTime = player.timer.position;
  const percentage = Math.floor((currentTime / maxTime) * 100);

  progressBar.style.width = `${Math.min(percentage, 100)}%`;

  // two endings. all errors eliminated in time?
  if (currentTime > maxTime && getCount() < player.video.phrases.length) {
    document
      .getElementById("fullscreen_message")
      .classList.add("fullscreen-visible");
  } else if (
    currentTime > maxTime &&
    getCount() >= player.video.phrases.length
  ) {
    document.getElementById("notepad").style.display = "block";
    document.getElementById("mail").style.display = "block";
  }
}
