// Step-1 -Create onload handler

window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("input-field");

  btn.addEventListener("click", function () {
    const bgColor = generateRGBcolor();
    root.style.backgroundColor = bgColor;
    output.value = generateRGBcolor();
  });
}
// step -2 - random color generator
function generateRGBcolor() {
  const red = Math.floor(Math.random() * 255).toString(16); //"toString(16)" meaning converting decimal value to hexadecimal value
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  return `#${red}${green}${blue}`;
}

// step -3 - collect all necessary reference
