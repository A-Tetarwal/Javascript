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