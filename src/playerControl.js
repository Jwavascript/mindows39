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

function onTimerReady() {
  let p = player.video.firstPhrase;
  while (p) {
    p.animate = (now, unit) => animatePhrase(now, unit, player); // animatePhrase에 player 인스턴스를 전달
    p = p.next;
  }
}

function onTimeUpdate(position) {
  const chord = player.findChord(position);
  console.log(chord);
  if (!chord) {
    return;
  }
}
