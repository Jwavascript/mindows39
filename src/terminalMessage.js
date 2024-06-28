import { getCount } from "./animation.js";

export function updateTerminal() {
  var data = [
    {
      action: "type",
      strings: ["npm install -g mimik^400"],
      output: '<span class="gray">+mimik@0.10.2 installed</span><br>&nbsp;',
      postDelay: 1000,
    },
    {
      action: "type",
      strings: ["cd tests^400"],
      output: " ",
      postDelay: 1000,
    },
    {
      action: "type",
      strings: ["mimik run^400"],
      output: document.querySelector(".mimik-run-output").innerHTML,
    },
    {
      action: "type",
      strings: ["that was easy!", ""],
      postDelay: 2000,
    },
  ];

  // Call getCount and check if the returned value is 10
  const count = getCount();
  console.log(count);
  if (count === 10) {
    document.getElementById("terminal").style.display = "block";
    runScripts(data, 0);
  }
}

function runScripts(data, pos) {
  var prompt = document.querySelector(".prompt");
  var script = data[pos];

  if (script.clear === true) {
    document.querySelector(".history").innerHTML = "";
  }

  switch (script.action) {
    case "type":
      // Cleanup for next execution
      prompt.innerHTML = "";
      prompt.dataset.index = 0;

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
          console.log(pos);
          if (pos < data.length) {
            console.log("dddd");
            setTimeout(function () {
              runScripts(data, pos);
            }, script.postDelay || 1000);
          }
        }
        if (pos >= data.length) {
          const terminal_ui = document.querySelector("#terminal");
          setTimeout(function () {
            terminal_ui.remove();
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
