import { getCount } from "./animation.js";

// file that handles terminal message ui, which runs specific event based on the number of clearing errors.

const template = document.querySelector("#terminal_template");

const clone = template.content.cloneNode(true);

const newWindow = clone.querySelector("#terminal");

newWindow.style.position = "absolute";

// terminal animations
export function updateTerminal() {
  var data = [
    {
      action: "type",
      strings: ["TASKKILL /F mikuvirus.exe"],
      output:
        '<span class="gray">Success : process "mikuvirus.exe" (PID 3939) terminated</span><br>&nbsp;',
      postDelay: 500,
    },
    {
      action: "type",
      strings: ["cd "],
      output: " ",
      postDelay: 500,
    },
    {
      action: "type",
      strings: ["mikuvaccine run"],
      output: document.querySelector(".miku-run-output").innerHTML,
    },
  ];

  // Call getCount and check if the returned value is 10
  const count = getCount();

  if (count == 10) {
    // show terminal ui, run terminal animation, remove glitch effect on wallpaper.
    document.querySelector("body").appendChild(newWindow);
    runScripts(data, 0);
    document.querySelector(".Playground__svg image").removeAttribute("id");
  }
  if (count == 20) {
    // show terminal ui, run terminal animation, and new error template
    document.querySelector("body").appendChild(newWindow);
    runScripts(data, 0);
    // new error template, not glitching text, icon change
    var newerror = `<div class="window">
        <div class="window_header">
          <span class="window_title">Error</span>
          <button class="window_close" data-ok>X</button>
        </div>
        <div class="window_body">
          <img
            class="window_body_icon"
            src="assets/images/warning2.svg"
            width="50"
            height="50"
          />
          <div class="window_body_text" data-glitch="glitch"></div>
        </div>
      </div>`;
    document.querySelector("#error_window_template").innerHTML = newerror;
  }
}

function runScripts(data, pos) {
  var prompt = document.querySelector(".prompt");
  var script = data[pos];

  //terminal clear condition

  if (script.clear === true) {
    document.querySelector(".history").innerHTML = "";
  }

  // for each elements in data[]
  switch (script.action) {
    case "type":
      // Cleanup for next execution
      prompt.innerHTML = "";
      prompt.dataset.index = 0;

      //typing animation.
      // after typing is over, empty the command line
      // and add commands and result you've typed to history div to make it appear
      function typeString() {
        var index = parseInt(prompt.dataset.index);
        if (index < script.strings[0].length) {
          prompt.innerHTML += script.strings[0][index];
          prompt.dataset.index = index + 1;
          setTimeout(typeString, 30);
        } else {
          var history = document.querySelector(".history").innerHTML;
          history = history ? [history] : [];
          history.push("$ " + prompt.textContent);
          if (script.output) {
            history.push(script.output);
            prompt.innerHTML = "";
            document.querySelector(".history").innerHTML = history.join("<br>");
          }
          // Scroll to bottom of screen
          document.querySelector("section.terminal_content").scrollTop =
            document.querySelector("section.terminal_content").scrollHeight;
          // Run next script
          pos++;

          // other items in list have same job sequentially.
          if (pos < data.length) {
            setTimeout(function () {
              runScripts(data, pos);
            }, script.postDelay || 1000);
          }
        }

        // window disappears when you complete for all elements in list
        if (pos >= data.length) {
          const terminal_ui = document.querySelector("#terminal");
          setTimeout(function () {
            newWindow.remove();
          }, 1000);
        }
      }

      typeString();
      break;
    case "view":
      // Additional actions can be handled here
      break;
  }
}
