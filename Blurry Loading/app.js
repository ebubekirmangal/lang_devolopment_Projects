const body = document.querySelector("body");
const show = document.querySelector(".loading");

let increase = 0;
let decrease = 100;

const increaseInterval = setInterval(() => {
  show.innerHTML = `${increase}%`;
  if (increase > 99) {
    clearInterval(increaseInterval);
  }
  increase++;
}, 30);

const decreaseInterval = setInterval(() => {
  body.style.backdropFilter = `blur(${decrease}px)`;
  if (decrease < 1) {
    clearInterval(decreaseInterval);
  }
  decrease--;
}, 30);
