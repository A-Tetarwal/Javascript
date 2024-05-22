// datatype conversion

let score = 33;
console.log(typeof score);

console.log("\n");

score = "33"
let valueInNumber = Number(score);
console.log(valueInNumber); 
console.log(typeof valueInNumber);

console.log("\n");

score = "33a";
valueInNumber = Number(score);
console.log(valueInNumber); 
console.log(typeof valueInNumber);
console.log(typeof NaN);

console.log("\n");

score = null;
console.log(typeof score);
console.log(typeof score);

console.log("\n");

score = true;
console.log(typeof score);
valueInNumber = Number(score);
console.log(valueInNumber); 
console.log(typeof valueInNumber);

console.log("\n");

score = "Ashish";
valueInNumber = Number(score);
console.log(valueInNumber); 
console.log(typeof valueInNumber);