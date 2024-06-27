import { getCount } from "./animation";

export function updateAvMessage(player) {
  const phrasesLength = player.video.phrases.length - 1;
  const avContainer = document.getElementById("error_messages");
  avContainer.innerHTML = "";
  console.log(getCount());
  const avMessage = `${getCount()} / ${phrasesLength}`; // player.video.phrases.length 사용
  const avElement = document.createElement("div");
  avElement.textContent = avMessage;
  avContainer.appendChild(avElement);
}
