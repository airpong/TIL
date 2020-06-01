/*


###HTML fragment###
const first_div = document.querySelector(".first")

const friends = ['sung-uk','young-ju','gyu-hwan']

const list = `
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>
`

first_div.innerHTML = list


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

###styled component
*/
const styles = aElement => {
    const el = document.createElement(aElement)
    return args => {
        const styles = args[0];
        console.log(styles)
        el.style = styles;
        return el;
    }
};

const title = styles("h1")`
    color:red;
`;
const sub = styles("span")`
    background-color:red;
`
title.innerText = "hello"
sub.innerText = "bye"

document.body.append(title)
document.body.append(sub)
/*

const fun1 = function m_print(args) {
    console.log(args)
}

const fun2 = args => console.log(args)

fun1("hello I'm function before es6")
fun2("hello I'm function after es6")

function abc() {
    this.i = 100;
    const in_abc = function() {
        console.log(this)
    }
    in_abc()
}
abc()


// 1
freiends = ['a','b','c']

const new_freiends = freiends.map(freiend => {
    return freiend + 'a'
})
console.log(new_freiends)

//2
freiends = ['a','b','c']

const new_freiends2 = freiends.map(freiend => freiend + ' 🏵')
console.log(new_freiends2)

//3
const button = document.querySelector("button")
button.addEventListener("click",function () {
    console.log(this)
})

button.addEventListener("click",() => {
    console.log(this)
})

const name = "changun"
console.log(`hello! my name is ${}`)

*/
