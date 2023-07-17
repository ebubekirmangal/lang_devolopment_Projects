const opens = document.getElementById("open")
const closes = document.getElementById("close")
const huge = document.querySelector(".hugeContainer")
const circle = document.querySelector(".circle")
const nav = document.querySelector("nav")

opens.addEventListener('click', () => {
  huge.classList.add("show-nav")    
    circle.classList.add("rotate")
    circle.classList.remove("rotates")
    nav.classList.add("active")

  })

  closes.addEventListener('click', () => {
    huge.classList.remove("show-nav")    
    circle.classList.remove("rotate")
    circle.classList.add("rotates")
    nav.classList.remove("active")
  })