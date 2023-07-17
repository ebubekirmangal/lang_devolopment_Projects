const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);
checkBox();

function checkBox() {
  const windowHeight = window.innerHeight;
  console.log(windowHeight);
  
  boxes.forEach((box) => {
    const bottomBox = box.getBoundingClientRect().bottom;
    
    if (windowHeight - bottomBox > 10) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}