// if

const { log } = require("console");

// curly braces mtlb scope open karna
// if (condition) { // condition honi chahiye 'true', tabhi execute hoga
    
// }
// else {
//     // else ek conditional code hai
// }

// comparing: <,>, <=, >=, ==, !=, ===(strict check, type bhi check krega)

score = 200;
// if (score>100) {
//     const power = "fly"
//     console.log(`Use power: ${power}`);
// } 
// console.log(`Use power: ${power}`); // ye cheez bahr execute nahin hogi


/*
_____ shorthand notation for if _____
// 1. implicit scope
// if(score>150) console.log("more super-powered"), console.log(" hero"); // not a good practice, use it for if just one statement is to be executed

*/


// const balance = 1500;

// if (balance<500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// } else if (balance<900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

// ----real world----
const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isLoggedIn && debitCard) {
    console.log("allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}