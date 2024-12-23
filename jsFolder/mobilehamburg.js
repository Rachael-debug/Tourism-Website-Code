const hamburger = document.querySelector(".hamburger")
const headerLinks = document.querySelector("#headerLinks")
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
    body.classList.toggle("noscroll")
})

