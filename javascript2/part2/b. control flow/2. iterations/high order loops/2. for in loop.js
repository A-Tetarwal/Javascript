const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby", 
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]); // isse values mil jayengi
    // or
    // console.log(key, ':', myObject[key]); // or use backticks, see
    // console.log(`${key}: ${myObject[key]}`);
}


// using on arrays
const myArray = new Array(2,3,4,5,6,7,8,9)
// console.log(myArray);

const newArray = [1,2,3,4,5,6,7]
// console.log(newArray);

for (const numm in myArray) {
    // console.log(numm); // yahan pe only indices return krega, see next line for values
    // console.log(myArray[numm]);
}

for (const numm in newArray) {
    // console.log(newArray[numm]);
}

// for in gives the keys while for of gives us the values directly

// Maps
const map1 = new Map();
map1.set("RJ", "Rajasthan") // isme keys aur values rakhna zaruri hai
map1.set("MH", "Maharashtra")
map1.set("HR", "Haryana")
map1.set("RJ", "Rajasthan") // can't insert duplicate values

// console.log(map1);

for (const key in map1) {
    console.log(map1); // this wil not work
}