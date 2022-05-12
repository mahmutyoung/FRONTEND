/*******Variable Scope*******/

/* var x = "outer scope";
const a = function() {

    console.log(x);
    var x = 'inner scope';

};
a(); //undefined */


/* let y = "outer scope";
const b = function() {

    console.log(y);
    let y = 'inner scope';

};
b(); //ReferenceError: can not access y before initialization
*/


/* console.log(k); //undefined. Because it is declared and initialized to default
console.log(l); //ReferenceError. Because it is declared but not initialized to a default
var k = 5;
let l = 6; */



/*******RESULT *******/
/* 1. For now, fuck the details. just stick to several best-practices.
    1.1. Use const as much as possible. Use let if you have to(for mutable primitives).
    1.2. Write code in 'strict mode' mindset

 */
// *****Function Declaration Style 1*****
//function sum(a, b) {
//    let c = a + b;
//    return c;
// } 

// console.log(sum(10, 20));

// const sum=function(a,b){

// }


// *****Function Declaration Style 2*****
// const sum = function(a, b) {
//     let c = a + b;
//     return c;
// }
// console.log(sum(20, 50));



/* Variables and Types */

// var customerName = "Mahmut Genç";
// console.log(customerName);

// var customerId = '1056783343';
// console.log(customerId);

// var totalCost = 200.65;
// console.log(totalCost + '$');

// var address = {
//     country: 'Turkey',
//     city: 'Ankara',
//     district: 'yenimahalle'
// }
// console.log(address);

// var gender = 'Male';
// console.log(gender);

// //Change the address. Updated address will be written
// //to console.
// address.city = 'Istanbul'
// console.log(address);

// var hobbies = ['Art', 'Extreme Sports', 'Cinema']
// console.log(hobbies)



/*******Casting*********/

// var age = "25";
// console.log(age + '  ' + typeof(age));

// age = Number(age);
// console.log(age + '  ' + typeof(age))

// age = String(age);
// console.log(age + '  ' + typeof(age))

// var price = '200$';
// price = parseInt(price);
// console.log(price + '  ' + typeof(price))
// price = parseFloat(price);
// console.log(price + '  ' + typeof(price))


/********Body-Weight Index *********/
//1. Take kilos compute BWI
// Formula:  BWI= Weight/square of height in meters
//2. Comment about the person
// 0 - 18.4 ------>Skinny
// 18.5 - 24.9 --->Normal
// 25.0 - 29,9 --->Fat
// 30 - 34,9 ----->Obese

/**********   Project 1. **************/
// Take information in any unit for weight and height and calculate.

/* var person = {
    name: 'Mahmut Genc',
    weight: 80,
    height: 1.72
}

console.log(person)

function calculateBWI(person) {
    var BWI = person.weight / (person.height * person.height);

    if (BWI <= 18.4) {
        console.log(`Your BWI = ${BWI} ----> Skinny`)
    } else if (BWI <= 24.9) {
        console.log(`Your BWI = ${BWI} ----> Normal`)
    } else if (BWI <= 29.9) {
        console.log(`Your BWI = ${BWI} ----> Fat`)
    } else if (BWI <= 34.9) {
        console.log(`Your BWI = ${BWI} ----> Obese`)
    }
}

calculateBWI(person); */



/************* Project 2. ATM demo ****************/

/*var accountA = {
    name: 'Mahmut Genç',
    accountNumber: 12141244,
    password: 1234,
    amount: 4000,
    bonusAmount: 2000
};

function drawMoney(account, amount) {
    console.log(`Welcome ${account.name}`)
    if (amount <= account.amount) {
        console.log('Please, take your money')
        account.amount -= amount;
    } else if (amount <= account.amount + account.bonusAmount) {
        console.log('Do you want to use your bonus')
    }
}

drawMoney(accountA, 1000);
drawMoney(accountA, 3000); */