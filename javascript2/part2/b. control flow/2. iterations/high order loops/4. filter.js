// const coding = ["js", "cpp", "rb", "swift"];

// // ab hum for each ko ek variable me store krwayenge
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item; // for each aise kuch bhi kabhi bhi return nahin karta hai
// })

// console.log(values);


// filter method for above problem, ye bhi callback function hi leta hai
const myNums = [1,2,3,4,5,6,7,8,9,10]

// myNums.filter((num)=>{
//     if(num>4){
//         console.log(num);
//     }
// })

// const newNums = myNums.filter((num)=> (num > 4) )
// console.log(newNums);

// ek aur tarika
// const newNums = myNums.filter((num)=> {
//     // num > 4  // aise to empty array return krega, curly braces mtlb scope wala seen, aise seen me 'return' kaam krega, see
//     return num > 4;
// } )
// console.log(newNums);

// ooper wala same kaam hum for each se agar kare
const newNums = [];
myNums.forEach(num => {
    if(num > 4){
        newNums.push(num)
    }
});
console.log(newNums);



// more on filters
