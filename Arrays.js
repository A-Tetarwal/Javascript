let marks = [97, 82, 75, 64, 36];
marks[1]=85; // updating
console.log(marks);

let length=0;
for (const anum of marks) {  // normal iteration se bhi kr skte h;
    console.log(`marks: ${anum}`);
    length++;
}
console.log(`length is: ${length}`);

let string= "Jaani";
console.log(string.toUpperCase());

// practice qn 1
 marks= [85, 97, 44, 37, 76, 60];

let sum=0;
for (const num of marks) {
    sum+=num;
}
console.log(`avg marks = ${sum/marks.length}`);


let price = [250, 645, 300, 900, 50];

// by for-of loop
// let i=0;
// for (let val of price) {
//     let offer = val/10;
//     price[i]=price[i]-offer;
//     i++
// }
// console.log(price) 


// by normal for loop
for(let i=0; i<price.length; i++){
    price[i]= price[i]-price[i]/10;
}
console.log(`sp ${price}`)


/* Array methods 
1. push(): add to end, 
2. pop(): delete from end & return, 
3. toString(): converts array to string
4. concat(): joins multiple arrays & returns result
5. unshift(): add to start
6. shift(): delete from start and return
7. slice(): returns a piece of array -> slice(startIdx, endIdx)
8. splice(): change original array(add, remove, replace) -> splice(startIdx, delCount, newEl1...elements continue); we can use splice for multiple tasks such as add element, delete element, replace element 
*/
