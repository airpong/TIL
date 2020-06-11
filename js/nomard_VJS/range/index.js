const selectedNum = document.querySelector(".js-input-selectedNum")
const maxRange = document.querySelector(".js-span-maxRange")
const guessNum = document.querySelector(".js-guessNum")
const buttonPlay = document.querySelector(".js-playbutton")
const resultPage = document.querySelector("#resultPage")
const nochoicePage = document.querySelector("#nochoicePage")
const outofrangePage = document.querySelector("#outofrangePage")
const chooseNum = document.querySelector(".js-chooseNum")
const randomNum = document.querySelector(".js-randomNum")
const resulth3 = document.querySelector(".js-h3-result")

let maxNum = 100;

const getRandomInt = (min,max) =>  (Math.round(Math.random() * (max - min)) + min)

selectedNum.addEventListener("change",(event) => {
    maxRange.innerText = selectedNum.value
    maxNum = selectedNum.value
})
buttonPlay.addEventListener("click", (evnet) => {
    if(guessNum.value === ""){
        nochoicePage.className="show"
        resultPage.className = "hide"
        outofrangePage.className="hide"
    }
    else if(guessNum.value > selectedNum.value) {
        console.log(guessNum.value,maxNum)
        resultPage.className = "hide"
        nochoicePage.className="hide"
        outofrangePage.className="show"
        
    }
    else{
        const randomInt = getRandomInt(0,maxNum)
        resultPage.className = "show"
        nochoicePage.className="hide"
        outofrangePage.className="hide"
        chooseNum.innerText = guessNum.value
        randomNum.innerText = randomInt
        
        if (parseInt(guessNum.value) !== randomInt) {
            resulth3.innerText = "You Lost!"
        }
        else {
            resulth3.innerText = "You won!"
        }
    }
    
    
})