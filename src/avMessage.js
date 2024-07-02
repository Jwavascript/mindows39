import { getCount } from "./animation";

// update Antivirus Ui Textarea
export function updateAvMessage(player) {
  const phrasesLength = player.video.phrases.length;
  const avContainer = document.getElementById("error_messages");
  avContainer.innerHTML = "";

  const avMessage = `${getCount()} / ${phrasesLength}`;
  const avElement = document.createElement("div");
  avElement.textContent = avMessage;
  avContainer.appendChild(avElement);
}
