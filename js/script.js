console.log("hola abby");
// Ok ahi el resto del codigo B)
const intv = 250;
let isWhite = true;
const audio = document.querySelector(".sound");
const cont = document.getElementById("container");
const elems = document.querySelectorAll("#container h1, #container p");

function toggle() {
  const color = isWhite ? "black" : "white";
  const bgColor = isWhite ? "white" : "black";

  cont.style.borderColor = color;
  cont.style.backgroundColor = bgColor;
  elems.forEach((el) => (el.style.color = color));

  isWhite = !isWhite;
}

function start() {
  toggle();
  setTimeout(() => requestAnimationFrame(start), intv);
}

start();

document.addEventListener("click", () => {
  if (audio.paused) {
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  }
});
