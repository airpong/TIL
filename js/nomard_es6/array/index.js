const buttons = document.getElementsByClassName("btn")
console.log(buttons)

// buttons.forEach(button => {
//     button.addEventListener("click",() => console.log(`${button.innerText}`))
// })

Array.from(buttons).forEach(button => {
    button.addEventListener("click",() => console.log(`${button.innerText} is clicked`))
})
