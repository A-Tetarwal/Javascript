const userEmail = [];

if (userEmail) {
    console.log("gotit");
} else {
    console.log("not got");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", "non-empty string alway truthy"
// [], {}, function(){}


// array ko check krne ka tareeka
if (userEmail.length === 0) {
    console.log("empty array");
}

// objects ko check krne ka tareeka
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("empty object");
}


// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // output: 5
// val1 = null ?? 10; // output: 10
// val1 = undefined ?? 15; // output: 15
val1 = null ?? 10 ?? 15; // output: 10

console.log(val1);

// Ternary Operator

// condition ? true : false
const day = 3;

day == 3 ? console.log("wednesday") : console.log("other day");