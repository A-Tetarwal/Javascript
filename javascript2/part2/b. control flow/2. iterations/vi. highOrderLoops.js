// for of loop -> array specific

// ["", "" , ""]  // array ke andar strings
// [{}, {}, {}]  // array me objects

const arr = [1,2,3,4,5]

for (const num of arr) { // yahan pe object ka mtlb kis cheez pe loop lgaan hai
    // console.log(num);
}

// on strings
const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet === " ") {  // space skip kr diya
        continue;
    }
    // console.log(`char: ${greet}`);
}

// Maps
const map1 = new Map();
map1.set("RJ", "Rajasthan") // isme keys aur values rakhna zaruri hai
map1.set("MH", "Maharashtra")
map1.set("HR", "Haryana")
map1.set("RJ", "Rajasthan") // can't insert duplicate values

// console.log(map1);

for (const key of map1) {
    // console.log(key);
}

// using keys and values
for (const [key, value] of map1) {
    // console.log(key, ':-', value);
}

// for of doesn't works on objects