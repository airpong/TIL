const h1 = document.querySelector("h1")
h1.style.color = "black"
h1.addEventListener("click",() => {
    console.log(h1.style.color)
    console.log(h1.style.color === "red")
    
})