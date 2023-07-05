// -------------------------------------
// ELEMENT ACCESS
// -------------------------------------
// TEXT BOX
const textMenuBox = document.querySelector("[data-text-menu-box]");
// HEADER ELEMENT
const menuToggle = document.querySelectorAll("[data-menu-togger]");
const sideBar = document.querySelector("[data-sidebar]");
const historyBtn = document.querySelector("[data-history-btn]");
// HISTORY ELEMENT
const historyList = document.querySelector("[data-history-list]");
// OVERLAY
const overlay = document.querySelector("[data-overlay]");
// BUTTON SECTION
// OPTION BTN
const optionBtn = document.querySelector("[data-option-btn]");
const optionMenu = document.querySelector("[data-option-menu]");
// MAIN BUTTONS
const buttons = document.querySelectorAll("button");
// INPUT OUTPUT ELEMENT
const inputText = document.querySelector("[data-input-text]");
const outputText = document.querySelector("[data-output-text]");

// -------------------------------------
// ADD EVENT LISTENER ON MULTIPLE ELEMENT
// -------------------------------------
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// -------------------------------------
// CUSTOM VARIABLE
// -------------------------------------

let input = "",
  output = "";
let inputHistory = "",
  outputHistory = "";
let liTag;

// ACTIVE SIDBAR MENU
// -------------------------------------

for (let i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener("click", () => {
    overlay.classList.toggle("active");

    sideBar.classList.toggle("active");
  });
}

// ACTIVE HISTORY SECTION
// -------------------------------------
historyBtn.addEventListener("click", () => {
  // ACTIVE OVERLAY
  overlay.classList.toggle("active");

  // ACTIVE TEXT BOX
  textMenuBox.classList.toggle("active");

  // SHOW HISTORY MENU
  historyList.classList.toggle("show");
});

// ACTIVE OPTION MENU
// -------------------------------------
optionBtn.addEventListener("click", (e) => {
  // SHOW OPTION MENU
  optionMenu.classList.toggle("show");

  if (e.target.style.rotate == "180deg") {
    e.target.style.rotate = "0deg";
  } else {
    e.target.style.rotate = "180deg";
  }
});

// BUTTONS
// -------------------------------------
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "clear") {
      inputText.value = "";
      outputText.value = "";

      outputText.classList.remove("active");
      inputText.classList.remove("active");
    } else if (button.id === "backspace") {
      input = inputText.value.toString();
      inputText.value = input.substr(0, input.length - 1);

      if (inputText.value === "") {
        outputText.classList.remove("active");
        inputText.classList.remove("active");
      }
    } else if (inputText.value !== "" && button.id === "=") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      output = eval(inputText.value);
      output = output.toLocaleString("en");
      // console.log(output)

      outputText.value = `${output}`;

      // ADD HISTORY
      inputHistory = inputText.value;
      outputHistory = outputText.value;

      liTag = `<li class="history-item" data-history-item>
                  <p class="input-his">${inputHistory}</p>
                  <p class="output-his">${outputHistory}</p>
                </li>`;

      historyList.insertAdjacentHTML("beforeend", liTag);
    } else if (inputText.value === "" && button.id === "=") {
      outputText.classList.remove("active");
      inputText.classList.remove("active");
    } else if (button.id === "%") {
      // console.log(inputText.value.length)
      outputText.classList.add("active");
      inputText.classList.add("active");
      outputText.value = eval(inputText.value)/100;
      inputText.value += '%';

    } else if (button.id === "root") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      outputText.value = Math.sqrt(eval(inputText.value));
    } else if (button.id === "pi") {
      inputText.value = "3.1415926535";
    } else if (button.id === "square") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      outputText.value = eval(inputText.value ** 2);

      // ADD HISTORY
      inputHistory = inputText.value;
      outputHistory = outputText.value;

      liTag = `<li class="history-item" data-history-item>
                        <p class="input-his">${inputHistory}</p>
                        <p class="output-his">${outputHistory}</p>
                      </li>`;

      historyList.insertAdjacentHTML("beforeend", liTag);

    } else if (button.id === "cube") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      outputText.value = eval(inputText.value ** 3);

      // ADD HISTORY
      inputHistory = inputText.value;
      outputHistory = outputText.value;

      liTag = `<li class="history-item" data-history-item>
                        <p class="input-his">${inputHistory}</p>
                        <p class="output-his">${outputHistory}</p>
                      </li>`;

      historyList.insertAdjacentHTML("beforeend", liTag);
    } else if (button.id === "sin") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      outputText.value = Math.sin((eval(inputText.value) * Math.PI) / 180);
    } else if (button.id === "cos") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      outputText.value = Math.cos((eval(inputText.value) * Math.PI) / 180);
    } else if (button.id === "tan") {
      outputText.classList.add("active");
      inputText.classList.add("active");

      outputText.value = Math.tan((eval(inputText.value) * Math.PI) / 180);
    } else {
      console.log(inputText.value.length)
      inputText.value[inputText.value.length];
      inputText.value += button.value;
    }
  });
});
