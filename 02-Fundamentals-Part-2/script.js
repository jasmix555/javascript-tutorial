'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive");

//learning functions
// function logger(){
//     console.log("My name is Jason");
// }

// //running the function
// logger();
// logger();
// logger();

// function fruitProcsr(apples , oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const applejuice = fruitProcsr(5, 0);
// console.log(applejuice);

// const appleOrangejuice = fruitProcsr(2, 5);
// console.log(appleOrangejuice);

// const num = Number("23");
// console.log(num);

// //function declaration
// function calcAge1(birthYear){
//     // const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression
// const calcAge2 = function(birthYear) {
//     return 2023 - birthYear;    
// }

// const age2 = calcAge2(1999);
// console.log(age1 , age2);

//arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
