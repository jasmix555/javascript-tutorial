//2023/02/02


/*
let js = 'amazing';

//these are values which are the smallest units in JS
console.log("jonas");
console.log(23);


let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


//variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person ="jonas"
let PI = 3.1415;


//good example
let myFirstJob = "konbini";
let mySecondJob = "waiter";

//bad exmple
let job1 = "teacher"
let job2 = "programmer"

console.log(myFirstJob);
*/
// boolean is something that can only be true or false
// let javascriptIsFun = true;
// console.log(javascriptIsFun);


// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

//changing a boolean to a string by giving it a property
// javascriptIsFun = "YES";
// console.log(typeof javascriptIsFun);

//about undefined (when a variable is not assigned to anything)
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);


//2023/02/03


//About Variables (const, let, var)

//mutation of a variable
// let age = 30;
// age = 31;
// console.log(age);


//const is an variable that cannot be mutated, which means we cannot make a const without an initial value
// const birthYear = 1991;
// birthYear = 1990;

//var is old, rarely use it
// var job = "programmer";
// job = "teacher"

//never create a variable without declaring what it is(const,let)
// lastName = "Ng"
// console.log(lastName);

//About math operator(+ , - , * , / , **(power of))

// const now = 2023;
// const ageJason = now - 2001;
// const ageGirl = now - 2002;
// console.log(ageJason, ageGirl);
// console.log(ageJason * 2 , ageJason / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2]

// const firstName = "Jason";
// const lastName = "Ng";
// console.log(firstName + " " + lastName);

// //assignment operator (=)
// let x = 10 + 5; // 15
// x += 10; //x = x + 10 = 25
// x *= 4 //x = x * 4 = 100
// x ++; // x = x + 1
// x --; // x = x - 1
// console.log(x);

// //About comparison operators(> , < , >= , <=)

// console.log(ageJason > ageGirl);
// // x > (is more than) y
// console.log(ageGirl >= 22);
// // x >= (is at least) y
// const isFullAge = ageGirl >= 22;

// console.log(now - 2001  > now - 2002);

const now = 2023;
const ageJason = now - 2001;
const ageGirl = now - 2002;

console.log(now - 2001  > now - 2002);

//learning about operator precedence(the importance of something(priority , order , rank))
console.log(25-10-5);

// the evaluation goes from right to left(because the precedence goes that way for the subtraction)
let x,y;
x = y = 25 - 10 - 5; // x = y = 10(the result of the subtraction) , x = 10
console.log(x,y);

const averageAge = (ageJason + ageGirl) / 2; //if we dont put the bracket first, it will give out a weird number as the precedence is working from right to left
console.log(ageJason , ageGirl , averageAge);
