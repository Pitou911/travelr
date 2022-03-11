const logo = document.querySelector(".logoFixed");
const side = document.querySelector("#sit");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    logo.classList.add("active");
  } else {
    logo.classList.remove("active");
  }
})

window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
  {
      side.classList.add("active");
  }
  else
  {
    side.classList.remove("active");
  }
};