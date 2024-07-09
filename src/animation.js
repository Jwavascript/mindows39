import { makeDraggable } from "./draggable.js";
import { updateAvMessage } from "./avMessage.js";
import { updateTerminal } from "./terminalMessage.js";

//processing animation, creating and managing text error window on the screen

export let count = 0;

let lastPhraseText = "";

// Update text and create windows according to a specific unit of time.
export function animatePhrase(now, unit, player) {
  if (unit.contains(now)) {
    const currentText = unit.text;

    if (now > player.video.firstPhrase.endTime && lastPhraseText == "") {
      currentText = "";
    }

    if (currentText !== lastPhraseText) {
      const template = document.querySelector("#error_window_template");
      if (!template) return;
      const clone = template.content.cloneNode(true);

      const windowBodyText = clone.querySelector(".window_body_text");
      if (!windowBodyText) return;
      windowBodyText.textContent = currentText;
      windowBodyText.dataset.glitch = currentText;

      const newWindow = clone.querySelector(".window");
      if (!newWindow) return;
      newWindow.style.position = "absolute";
      newWindow.style.left = `${50 + (Math.random() * 40 - 30)}vw`;
      newWindow.style.top = `${50 + (Math.random() * 40 - 30)}vh`;

      document.querySelector("#container").appendChild(newWindow);

      makeDraggable(newWindow, newWindow.querySelector(".window_header"));

      const okButton = newWindow.querySelector("[data-ok]");
      if (!okButton) return;
      okButton.addEventListener("click", () => {
        newWindow.remove();
        count++;
        updateAvMessage(player);
        updateTerminal();
      });

      okButton.addEventListener("touchstart", () => {
        newWindow.remove();
        count++;
        updateAvMessage(player);
        updateTerminal();
      });

      lastPhraseText = currentText;
      newWindow.hidden = false;
    }
  }
}

// track and manage the number of errors.
export function getCount() {
  return count;
}

export function setCount(newcount) {
  count = newcount;
}

export function resetPhrase() {
  lastPhraseText = "";
}
