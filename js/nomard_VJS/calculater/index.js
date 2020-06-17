const numbers = document.querySelectorAll(".number")
const opers = document.querySelectorAll(".oper")
const span = document.querySelector("span")
let firstnum = -1;
let secondnum = -1;
let operator = -1;
let result = -1;

const init = () => {
    firstnum = -1
    secondnum = -1
    operator = -1;
    let result = -1;
}

const cal = () => {
    if (operator === "+") result = parseInt(firstnum) + parseInt(secondnum)
    if (operator === "-") result = parseInt(firstnum) - parseInt(secondnum)
    if (operator === "*") result = parseInt(firstnum) * parseInt(secondnum)
    if (operator === "/") result = parseInt(firstnum) / parseInt(secondnum)
}

const numberClicked = event => {
    const number = event.target.textContent
    console.dir(number)
    if (firstnum === -1) {
        firstnum = number
        span.innerText = firstnum
    }
    else if (operator === -1){
        firstnum = firstnum + number
        span.innerText = firstnum
    } 
    else if (secondnum === -1) {
        secondnum = number
        span.innerText = secondnum
    }
    else {
        init()
        firstnum = number
        span.innerText = firstnum
    }
    
    console.log(firstnum,secondnum,operator)
}

const operClicked = event => {
    if (operator === -1) {
        operator = evnet.target.textContent
    }
    else {
        
    }
}
numbers.forEach(number => {
    number.addEventListener("click",numberClicked)
})

opers.forEach(oper => oper.addEventListener("click",operClicked))