// js has resizable arrays
// mixed items in arrays of js can be present
// shallow copies -> properties share the the same reference


const myArray = [0,1,2,3,4,5,6,7,8,9];
// console.log(myArray[1]);

// or

const array2 =new Array(1,2,3,4,5,6); //keep this syntax in mind
// for (let index = 0; index < array2.length; index++) {
//     const element = array2[index];
//     console.log(element);
// }

// simply without loop we can print array like this
// console.log(array2);


// ***** push - pop *****

// console.log(`before pushing: ${array2}`);
// array2.push(10);  // push adds the elements, even array bhi push krskte
// console.log(`after pushing 10: ${array2}`);

// array2.pop(); //pop deletes the last element in the array
// array2.pop();
// console.log(`popped array: ${array2}`);


// ***** unshift - shift *****

array2.unshift(9); // this adds the 9 before first element array2
console.log(array2);

array2.shift(); // this deletes the first element of array2
console.log(array2);

const array3 = array2.join(); // converts the array to string
console.log(array3); // converted array, and datatype to string
console.log(array2);
