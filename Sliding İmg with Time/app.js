const imgs = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg"];
let currentIndex = 0;

function showImg() {
  const displayedImage = document.getElementById("displayedImage");
  displayedImage.setAttribute("src", imgs[currentIndex]);

  const icons = document.querySelectorAll("i");
  icons.forEach((icon, idx) => {
    if (idx === currentIndex) {
      icon.classList = "fa-solid fa-circle-dot";
      icon.style.color = "#e6f514";
    } else {
  icon.classList = "fa-solid fa-circle-dot";
  icon.style.color = "#606366";
    }
  });

  currentIndex++;
  if (currentIndex === imgs.length) {
    currentIndex = 0;
  }
}

setInterval(showImg, 1250);
