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

//about truthy and falsy values

//falsy values : 0 , ' ' , undefined , null , NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 0 ;
// if(money){
//     console.log("Don't spend it all");
// }else{
//     console.log("You should get a job");
// }

// let height;
// if(height){
//     console.log("YAY! Height is defined");
// }else{
//     console.log("Height is Undefined");
// }

//about equality operators : == vs ===
//=== strict equal (use this more)
//== loose equal (rarely use this)
// const age = 18;
// if(age === 18)console.log("You just became an adult");

// const favourite = Number(prompt("What's your favourite number"));
// console.log(favourite);

// if( favourite === 23){
//     console.log('Cool! 23 is an amazing number!');
// }else if(favourite === 7){
//     console.log("7 is also a cool number!");
// }else{
//     console.log("That is also a cool number");
// }

// //operator for different
// if(favourite !== 23){
//     console.log("Why not 23?");
// }

//2023/02/10
//logical operators

// const hasDriverLisc = true; //A
// const hasGoodVis = true;    //B

// console.log(hasDriverLisc && hasGoodVis); //and
// console.log(hasDriverLisc || hasGoodVis); //or 
// console.log(!hasDriverLisc);              //not

// const shouldDrive = hasDriverLisc && hasGoodVis;
// // if(shouldDrive){
// //     console.log("Sarah should drive");
// // }
// // else{
// //     console.log("Someone else should drive");
// // }

// const isTired = true;
// console.log(hasDriverLisc && hasGoodVis && isTired);

// if(hasDriverLisc && hasGoodVis || !isTired){
//     console.log("Sarah should drive");
// }
// else{
//     console.log("Someone else should drive");
// }

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
const dolphinsScore = (97 + 112 + 81) / 3;
const koalasScore = (109 + 95 + 86) / 3;
console.log(dolphinsScore , koalasScore);
if(dolphinsScore > koalasScore &&  dolphinsScore >= 100){
    console.log("Dolphins Win");
}else if(dolphinsScore < koalasScore && koalasScore >= 100){  
    console.log("Koalas Win");
}else if(dolphinsScore===koalasScore && dolphinsScore >= 100 && koalasScore >= 100){
    console.log("It's a draw");
}else{
    console.log("No one wins");
}
*/

//switch statement
// const day = "monday";
// switch(day){
//     case"monday": //day === "monday"
//     console.log("Plan course structure");
//     console.log('Go to coding meetup');
//     break;
//     case"tuesday":
//     console.log("Prepare theory videos");
//     break;
//     case"wednesday":
//     console.log("Work on the js challenge");
//     case"thursday":
//     console.log("write code examples");
//     break;
//     case"friday":
//     console.log("Record videos");
//     break;
//     case"saturday":
//     case"sunday":
//     console.log("enjoy the weekend's");
//     break;
//     default:
//         console.log("Not a valid day");
// }

// if(day === "monday"){
//     console.log();
// }else if(day === "tuesday"){

// }else if(day === "wednesday" || day === "thursday"){
//     console.log("write code examples");
// }else if(day === "friday"){
//     console.log("Record videos");
// }else if(day === "saturday" || day === "sunday"){
//     console.log("enjoy the weekend's");
// }else{
//     console.log("Not a valid day");
// }

//conditional (ternary) operator (if else statement in on line using ? and :)
// const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink juice");

// const drink = age >= 18 ? "wine" : "Water";
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = "wine"
// }else {
//     drink2 = "water"
// }
// console.log(drink2);

// //using template literal ( ${} )
// console.log(`I like to drink ${age >= 18 ? "wine" : "Water"}`);

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
const bill = 430;
//              is less than 300 or more than 50
const tip = bill <= 300 && bill>= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
