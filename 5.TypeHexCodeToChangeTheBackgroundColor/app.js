// Globals variable
let div = null;

window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const output = document.getElementById("input-field");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateToastMessage(`${output.value} copied`);
    } else {
      alert("Invalid color code");
    }
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      root.style.backgroundColor = color;
    }
  });
}
function generateColor() {
  const r = Math.ceil(Math.random() * 255).toString(16);
  const g = Math.ceil(Math.random() * 255).toString(16);
  const b = Math.ceil(Math.random() * 255).toString(16);

  return `#${r}${g}${b}`;
}

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerHTML = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

/**
 * @param {string} color:
 *
 */

function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
