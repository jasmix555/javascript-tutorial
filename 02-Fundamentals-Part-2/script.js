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

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const retireYear = (birthYear , firstname) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstname} retires in ${retirement} years.`
// }

// console.log(retireYear(1991 , 'Jason'));

//function calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcsr(apples , oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
//     return juice;
// }

// console.log(fruitProcsr(2,3));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


// const retireYear = function(birthYear , firstname){
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstname} retires in ${retirement} years.`);
//         return retirement;
//     }else{
//         console.log(`${firstname} has already retired.`);
//         return -1;
//     }
// }

// console.log(retireYear(1991,'Jason'));
// console.log(retireYear(1950,'Mike'));

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


// const calcAverage = (a,b,c)=> (a + b + c) / 3;

// let Dolphins = calcAverage(44 , 23 , 71);
// let Koalas = calcAverage(65, 54 , 49);

// console.log(Dolphins , Koalas);

// const checkWinner = (avgDolphins , avgKoalas)=>{
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`);
//     }else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins})`);
//     }else{
//         console.log(`No team wins`);
//     }
// }
// checkWinner(Dolphins , Koalas)

// Dolphins = calcAverage(85 , 54 , 41);
// Koalas = calcAverage(23 , 34 , 27);
// console.log(Dolphins , Koalas);
// checkWinner(Dolphins , Koalas)