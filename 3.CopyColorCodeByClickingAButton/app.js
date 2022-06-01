window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const inputField = document.getElementById("input-field");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateColor();
    root.style.backgroundColor = bgColor;
    inputField.value = generateColor();
  });
}
function generateColor() {
  const r = Math.ceil(Math.random() * 255).toString(16);
  const g = Math.ceil(Math.random() * 255).toString(16);
  const b = Math.ceil(Math.random() * 255).toString(16);

  return `#${r}${g}${b}`;
}
