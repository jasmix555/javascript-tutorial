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

// const now = 2023;
// const ageJason = now - 2001;
// const ageGirl = now - 2002;

// console.log(now - 2001  > now - 2002);

//learning about operator precedence(the importance of something(priority , order , rank))
// console.log(25-10-5);

// the evaluation goes from right to left(because the precedence goes that way for the subtraction)
// let x,y;
// x = y = 25 - 10 - 5; // x = y = 10(the result of the subtraction) , x = 10
// console.log(x,y);

// const averageAge = (ageJason + ageGirl) / 2; 
//if we dont put the bracket first, it will give out a weird number as the precedence is working from right to left
// console.log(ageJason , ageGirl , averageAge);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

//Test Data 1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI , johnBMI , markHigherBMI);

//Test Data 2
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;
// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI , johnBMI , markHigherBMI);
*/

// 2023/02/04

//About Strings and Template literals(without using space to cleanly write the code)

// const firstName = "jason";
// const job = "student";
// const birthYear =  2001;
// const year = 2023
// const jason = "I'm " + firstName + ", am a " + (year - birthYear) + " years old " + job;
// console.log(jason);
// //the start of using backticks (` `)
// const jasonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jasonNew);

// console.log(`Just a regular string....`);

// console.log(`string
// with
// multiple
// line`);

// about if and else
// const age = 19;
// if(age >= 18){
//     console.log('jason can start driving license  😆');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`jason is too young. wait another ${yearsLeft} years.`);
// }

// const birthYear = 1998;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI , johnBMI , markHigherBMI);

// if(johnBMI > markBMI){
//     console.log("Mark's BMI is higher than John's!");
// }else{
//     console.log("John's BMI is higher than Mark's!");
// }

// if(markBMI > johnBMI){
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
// }
*/

// 2023/03/06
//about type conversion and coercion

//type conversion (Number / String)
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('I am ' + String(23) + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1;//starts with a string which changes it to a string = 11
// n = n - 1;
// console.log(n);
// console.log(2 + 3 + 4 + '5');
// console.log('10' - '4' - '3' - 2 + '5');
