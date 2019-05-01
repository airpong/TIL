// Array Helper Methods

// case 1.
// ES5
// var colors = ['red','blue','green'];

// for (var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// ES6+ - forEach
// let colors = ['red','blue','green'];

// colors.forEach(function(color){     // callback function
//     console.log(color);
// })

// case 2.
// ES5
var numbers = [1,2,3]
// var doubleNumbers = []

// for (var i = 0; i < numbers.length; i++) {
//     doubleNumbers.push(numbers[i] * 2)
// }



// ES6+ - forEach
// numbers.forEach(function(number){
//     doubleNumbers.push(number*2)
// })

const doubleNumbers = numbers.map(function(number){
    return number * 2
})  //map function must have return value

console.log(doubleNumbers)

// case 3.
// ES6+ - filter
const products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
]

const fruitProducts = products.filter(function(product){
    return product.type === 'fruit'
})      //filter function must return contidion, if return contidion is true, it will takes element and push

console.log(fruitProducts)


// case 4.
// ES6+ - find
const users = [
    {name:'nwith'},
    {name: 'admin'},
    {name: 'admin'},

]

const foundUser = users.find(function(user){
    return user.name === 'admin'
})

console.log(foundUser)

// case 5.
// ES6+ - every & some

const computers = [
    {name: 'macbook', ram: 16},
    {name: 'gram', ram: 8},
    {name: 'series9', ram: 32},
]

const everyComputersAvaulable = computers.every(function(computer){
    return computer.ram > 16
})

const someComputersAvaulable = computers.some(function(computer){
    return computer.ram > 16
})

console.log(everyComputersAvaulable)
console.log(someComputersAvaulable)