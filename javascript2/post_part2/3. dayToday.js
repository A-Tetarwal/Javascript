const daet = new Date();

const date = daet.getDate();
const month = daet.getMonth();
const year = daet.getFullYear();

console.log(`Date: ${date}/${month+1}/${year}`); // idhar month wala array 0 to 11 hota hai, like the days array.

// or the faster way
console.log(`Date: ${daet.getDate()}/${daet.getMonth()+1}/${daet.getFullYear()}`);
