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

// const year = new Array(1991 , 1984 , 2008 , 2020)
// console.log(year);

// const friends = ["michael" , "steven" , "peter"]
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[friends.length - 2]);
// friends[2] = "jay";
// console.log(friends);

// const firstname = "jay";
// const jay = [firstname , "ng" , 2023 - 2001 , "student" , friends]
// console.log(jay);

// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }

// const years = [1990 , 1967 , 2002 , 2010 , 2018];
// const age1 =  calcAge(years[0]);
// const age2 =  calcAge(years[1]);
// const age3 =  calcAge(years[years.length -1]);
// console.log(age1 , age2 , age3);

// const ages = [calcAge(years[0]), calcAge(years[1]) , calcAge(years[years.length - 1 ])]
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = bill =>{
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125 , 225 , 44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips);

// const total = [bills[0]+tips[0] , bills[1]+tips[1] , bills[2]+tips[2]  ]
// console.log(total);