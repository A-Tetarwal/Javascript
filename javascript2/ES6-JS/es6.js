// ----- arrow functions- fat arrow fnc -----
const a = () => {}

const b = (param) => {} // ek variable  ho to brackets ht skte hain
b(12)
// jaise
const c = param => {}
c('hello')

// lekin agar ek se jyada ho to bracket lgana jruri hai
const d = (p1, p2) => {}

// arrow fn with impicit return
const e = () => 12
console.log(e());


// ----- template literals backtick -----
console.log(`hey 2+2 is ${2+2} and 2-2 is ${2-2}`);

// ----- default parameter -----
const logger = (prm1 = 0, prm2 = 2) => {
    console.log(prm1, prm2);
}

logger(14,11);
logger(11); // since default value of prm2 is 2, to vahan pr undefined print nahin hoga


// ----- spread/rest operator -----
const arr = [1,2,3,4,5,3,5,72,2];
let arr1 = arr; // ye copy nahin reference liya liya hai, copy krne k liye spread operator use kr skte hain
// like this
arr1 = [...arr1];
// ye toh hua spread operator, ab

// rest operator
function abcd(a,b,c,...d){
    console.log(a,b,c,...d);
}

abcd(1,2,3,4,6,6,7,9);


// ----- destructuring -----

const ar = [1,2,3];
const [a1, b1] = ar; // isse array nahin ban rha hai, isse do naye variables bn rhe hain jo pehli do values lenge 'ar' array mein se
const [a2,b2,c2] = ar; // three new variables to store three values of 'ar'
const [a4,b4,c4,d4] = ar; // yahan pr d4 undefined rhega kyuki array me to values teen hi hain
const [a3,,c3] = ar; // isme double comma lgane se ek value skip ho gyi hai aur first and third value mil jayegi inn variables ko
const [,,a6] = ar // yaha pe last value mil gayi hai


const obj = {name: 'Ashish', age: 20};
const {age} = obj; // ye obj me se age naame ka variable nikal lega


