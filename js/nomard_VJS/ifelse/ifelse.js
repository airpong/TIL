const h1 = document.querySelector("h1")

const addListener = (event) => {
    const classList = h1.classList
    console.log(classList)
    console.log(window.innerWidth)
    console.log(window.outerWidth)
    classList.toggle("color")
}

window.addEventListener("resize",addListener)