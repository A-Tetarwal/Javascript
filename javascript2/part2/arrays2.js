const array1 = [1,3,4,5,6];
const array2 = ["namaste", "hello", "hi", "tata", "bye"];
const array3 = ["@", "#", "$"];


// ***** push and concat *****

// array1.push(array2); // push makes changes inplace
// console.log(array1); 

// console.log(array2.concat(array3)); // concat gives us a new array composed of two or more arrays


// easy way to concat, spread method
// const all_arrays =[...array1, ...array2, ...array3];
// console.log(all_arrays);


// flat() method
// const array_in_array = [1,2,3,4,[3,5,6,[7,9,8], 4,5,3], 10];
// const easy_array_in_array = array_in_array.flat(Infinity);

// console.log(easy_array_in_array);


// isArray and from methods
console.log(Array.isArray("India"));
console.log(Array.from("India"));
// interesting case
console.log(Array.from({name: "ashish"})); // ye empy return krega

// eg
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));