console.log('hello!');

'abc'.toUpperCase();
[1,2,3].push(4);
// here all these .log(), .toUpperCase(), .push() are functions, () -> is a parenthesis, it invokes the functions, ismein hum input dete hain

/* 
function definition -> 

function functionName(){ 
    // do some work
}

function functionName(parameter1, parameter2, ...){
    // do some work
}


functon call ->

functionName();
 */

function printSomething(){
    console.log('hello brother');
    console.log(`hello peter`);
}

printSomething();

function myFunction(msg){
    console.log(msg);
}

// NaN -> not a number
myFunction(`hey jaana`);

// function hmein redundancy ya repitition se bachata hai

// function to calculate sum
let a =prompt(`enter first number`);
let b =prompt(`enter second number`);
function sum(a, b){
    a=parseFloat(a);
    b=parseFloat(b);
    console.log(`sum = ${a+b}`)
}

sum(a, b);

// another way to do above
function sum1(a, b){
    a=parseFloat(a);
    b=parseFloat(b);
    console.log(`sum = ${a+b}`)
}
sum1(prompt(`enter 1st number(to print the sum of two numbers)`), prompt(`enter 2nd number`));

//  also
function summ(x, y){
    // x, y are lcoal variables and they have block scope
    s= x+y;
    return s;
}
let val = summ(3,4);
console.log(val);


// arrow functions
const sumArrow = (a,b)=>{
    return a+b;
}
console.log(`Arrow sum =  ${sumArrow(4,5)}`);

const arrowMultiply = (a,b)=>{
    return a*b;
}
console.log(`product = ${arrowMultiply(3,4)}`);
// arrow functions are generally used for small tasks, arrow function bhi parenthesis mein bina input ke kaam kr skta hai



// practice qn 1
function returnVowel(str){
    let vowelCount = 0;
    str=str.toLowerCase();// Convert the input string to lowercase
    for (const vowel of str) {
        if(vowel === 'a' || vowel === 'e' || vowel === 'i'|| vowel === 'o'|| vowel === 'u'){
            vowelCount++;
        }
    }
    console.log(`number of vowels in your string '${str}' is = ${vowelCount}`);
}
returnVowel(prompt(`enter a string`));

// using arrow function
const countVowel = (str)=>{
    let vowelCount = 0;
    str=str.toLowerCase();// Convert the input string to lowercase
    for (const vowel of str) {
        if(vowel === 'a' || vowel === 'e' || vowel === 'i'|| vowel === 'o'|| vowel === 'u'){
            vowelCount++;
        }
    }
    console.log(`number of vowels in your string '${str}' is = ${vowelCount}`);
}


// callback function => a callback funtion passed as an argument to another function.
// javascript mein hum functions ko parameters ki tarah pass kar sakte hain

// for eg.
function abc(){
    console.log('hello');
}

function agie(abc){  // abc is passed as a parameter
    return abc;
}