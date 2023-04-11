const menuButton = document.getElementById("menu-open")
const menuCloseButton = document.getElementById("menu-close")
const navMenu = document.getElementById("nav-menu")

menuButton.addEventListener("click", () => {
  menuButton.classList.add("hidden")
  menuCloseButton.classList.remove("hidden")
  navMenu.classList.remove("hidden")
  navMenu.classList.add("grid")
})

menuCloseButton.addEventListener("click", () => {
  menuCloseButton.classList.add("hidden")
  menuButton.classList.remove("hidden")
  navMenu.classList.add("hidden")
  navMenu.classList.remove("grid")
})
