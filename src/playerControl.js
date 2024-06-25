import { Player, Ease } from "textalive-app-api";
import { contestSongs } from "../contestsong.js";
import { animatePhrase } from "./animation.js";

export const player = new Player({
  app: {
    token: "Fa7wvVkV0f24otvj",
  },
  mediaElement: document.querySelector("#media"),
});

export function initializePlayer() {
  player.addListener({
    onAppReady,
    onTimerReady,
    onTimeUpdate,
    onThrottledTimeUpdate,
  });
}

function onAppReady(app) {
  if (!app.managed) {
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
  }

  if (!app.songUrl) {
    player.createFromSongUrl(contestSongs[5].url, {
      video: contestSongs[5].video,
    });
  }
}

function onTimerReady() {
  let p = player.video.firstPhrase;
  while (p && p.next) {
    p.animate = (now, unit) => animatePhrase(now, unit, player); // animatePhrase에 player 인스턴스를 전달
    p = p.next;
  }
}

function onTimeUpdate(position) {
  const beat = player.findBeat(position);
  if (!beat) {
    return;
  }
  document.querySelector("#beatbar").style.width = `${Math.ceil(
    Ease.circIn(beat.progress(position)) * 100
  )}%`;
}

function onThrottledTimeUpdate(position) {
  document.querySelector("#position strong").textContent = String(
    Math.floor(position)
  );
}
