'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive");

//learning functions
function logger(){
    console.log("My name is Jason");
}

//running the function
logger();
logger();
logger();

function fruitProcsr(apples , oranges){
    console.log(apples , oranges );
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const applejuice = fruitProcsr(5, 0);
console.log(applejuice);