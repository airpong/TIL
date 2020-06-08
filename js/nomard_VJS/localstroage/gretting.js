const form = document.querySelector(".js-form")
const input = form.querySelector(".js-input")
const h4 = document.querySelector("h4")
const current_UN = "currentUserName"
form.addEventListener("submit",(event) => {
    event.preventDefault()
    console.log(input.value)
    localStorage.setItem(current_UN,input.value)
})

const init = () => {
    const name = localStorage.getItem("currentUserName")
    if(name === null) {
        form.classList.remove("m_form")
        form.classList.add("showing")
    } else {
        h4.classList.remove("greeting")
        h4.classList.add("showing")
        h4.innerText = `hello ${localStorage.getItem(current_UN)}`
    }
}

init()