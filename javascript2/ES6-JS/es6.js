const { error } = require("console");
const { resolve } = require("path");

// ----- arrow functions- fat arrow fnc -----
const a = () => {};

const b = (param) => {}; // ek variable  ho to brackets ht skte hain
b(12);
// jaise
const c = (param) => {};
c("hello");

// lekin agar ek se jyada ho to bracket lgana jruri hai
const d = (p1, p2) => {};

// arrow fn with impicit return
const e = () => 12;
console.log(e());

// ----- template literals backtick -----
console.log(`hey 2+2 is ${2 + 2} and 2-2 is ${2 - 2}`);

// ----- default parameter -----
const logger = (prm1 = 0, prm2 = 2) => {
  console.log(prm1, prm2);
};

logger(14, 11);
logger(11); // since default value of prm2 is 2, to vahan pr undefined print nahin hoga

// ----- spread/rest operator -----
const arr = [1, 2, 3, 4, 5, 3, 5, 72, 2];
let arr1 = arr; // ye copy nahin reference liya liya hai, copy krne k liye spread operator use kr skte hain
// like this
arr1 = [...arr1];
// ye toh hua spread operator, ab

// rest operator
function abcd(a, b, c, ...d) {
  console.log(a, b, c, ...d);
}

abcd(1, 2, 3, 4, 6, 6, 7, 9);

// ----- destructuring -----

const ar = [1, 2, 3];
const [a1, b1] = ar; // isse array nahin ban rha hai, isse do naye variables bn rhe hain jo pehli do values lenge 'ar' array mein se
const [a2, b2, c2] = ar; // three new variables to store three values of 'ar'
const [a4, b4, c4, d4] = ar; // yahan pr d4 undefined rhega kyuki array me to values teen hi hain
const [a3, , c3] = ar; // isme double comma lgane se ek value skip ho gyi hai aur first and third value mil jayegi inn variables ko
const [, , a6] = ar; // yaha pe last value mil gayi hai

const obj = { name: "Ashish", age: 20 };
const { age } = obj; // ye obj me se age naame ka variable nikal lega

// ----- promise -----

const ans = new Promise((resolve, reject) => {
  if (true) {
    return resolve();
  } else {
    return reject;
  }
});

ans
  .then(() => console.log("resolved"))
  .catch(() => console.log("not resolved"));

const num = Math.random() * 10;

const numberr = new Promise(function (res, rej) {
  // setTimeout(() => {
  if (num < 5) {
    return res();
  } else return rej();
  // }, 2000)
});

numberr
  .then(() => console.log(`${num} less then 5`))
  .catch(() => console.log(`${num} is greater than 5`)); // catch mein isliye likhte hain agar koi kaam nahin hota

//  isko hum inn sabko alag alg vaiables me store krke bhi kr skte hain, likein neeche humne inko directly k diya hai
new Promise((res, rej) => {
  return res("sabse pehle ghar par aao");
})
  .then((data) => {
    console.log(data);
    new Promise((res, rej) => {
      return res("gate kholo aur gate lagao");
    }).then((data) => {
      console.log(data);
      new Promise((resolve, reject) => {
        return resolve("khana pakake khana lagao");
      }).then((data) => {
        console.log(data);
        new Promise((resolve, reject) => {
          return resolve("incognito mode chlao");
        }).then((data) => {
          console.log(data);
          new Promise((res, rej) => {
            return res("so jao kyuki tum thak gaye ho");
          }).then((data) => {
            console.log(data);
          });
        });
      });
    });
  })
  .catch((error) => console.log(error));
// oopar wale ko dusre tarike se bhi kr skte hain
// see

var anss = new Promise(function (res, rej) {
  return res('sabse pehle ghar par aao');
})

var p2 = anss.then((data) => {
  console.log(data);
  return new Promise(function (res, rej) {
    return res('gate kholo aur gate lgao');
  })
})
// and aage aise hi .then aur andar return krte raho jb tk async task poora na ho jaye

// _____ Async - Await _____
/*
async await isliye tb use krte hain jb kisi third party se kaam krwana ho
*/
async function abcd() {
  let raw = await fetch('https://randomuser.me/api/');
  let ans = await raw.json();  // idhar await nahin lgayenge to pending promise dikhayega, await lgane ka mtlb jb tk kaam nhi ho jata, usi line pe rukey raho
  console.log(ans);
}

// _____ try-catch _____

/* 
try catch isliye use karte hain, since js is an interpreter language, it runs line by line, 
so agar kisi bhi line mein error milta hai to code vahi par ruk jata hai, aisa na ho isiliye 
agar hamein lagta hai ki kisi line ya code mein error aa skta hai 
toh hum try and catch lgate hain, see 
*/

console.log('hey');
// console.log(hey); // iss line ke execute hote hi code ruk jayega, isi liye neeche ke code me iske liye try-catch lgaya hai
console.log('hey');


console.log("hey");
try {
  console.log(hey);
} catch (err) {
  console.log(err);
}
console.log("hey");
