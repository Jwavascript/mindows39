import { Player, Ease } from "textalive-app-api";
import { animatePhrase } from "./animation.js";

// initialize the player instance
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
  });
}

function onAppReady(app) {
  if (!app.managed) {
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
  }

  if (!app.songUrl) {
    player.createFromSongUrl("https://piapro.jp/t/xEA7/20240202002556", {
      video: {
        // 音楽地図訂正履歴
        beatId: 4592300,
        chordId: 2727640,
        repetitiveSegmentId: 2824331,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FxEA7%2F20240202002556
        lyricId: 59420,
        lyricDiffId: 13967,
      },
    });
  }
}

// Invoke the animation function.
function onTimerReady() {
  let p = player.video.firstPhrase;
  while (p) {
    p.animate = (now, unit) => animatePhrase(now, unit, player);
    p = p.next;
  }
}

//Show the current chords and the next chords. Update the current chords over time.

function onTimeUpdate(position) {
  let lastChordText = "";
  const currentText = player.findChord(position);

  if (currentText !== lastChordText) {
    document.querySelector(".chord_current").textContent = currentText.name;
    document.querySelector(".chord_next").textContent = currentText.next.name;

    const chord_progress = document.getElementById("chord_bar");
    const maxTime = currentText.endTime - currentText.startTime;
    const currenTime = position - currentText.startTime;
    const percentage = Math.floor((currenTime / maxTime) * 100);
    chord_progress.style.width = `${Math.min(percentage, 100)}%`;
  }
}
