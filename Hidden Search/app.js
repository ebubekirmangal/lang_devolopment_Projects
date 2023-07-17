const button = document.querySelector("button");
const input = document.querySelector("input");
const search = document.querySelector(".search")

button.addEventListener("click", () => {
    if (search.classList.contains("active")) {
        search.classList.remove("active");
        search.classList.add("inactive");
      } else {
        search.classList.add("active");
        search.classList.remove("inactive");
      }

});