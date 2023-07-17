const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentStep = 1;

next.addEventListener('click', () => {
  currentStep++;
  operation();
})

prev.addEventListener('click', () => {
  currentStep--;
  operation();
})

function operation() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
circle.classList.add('active')
    }
else{
  circle.classList.remove('active')
}
  });

  const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  prev.disabled = 1===currentStep;
  next.disabled = circles.length === currentStep;
}
