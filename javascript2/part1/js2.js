// datatype conversion

let score = 33;
console.log(typeof score);

console.log("\n");

score = "33"
let valueInNumber = Number(score); //example of conversion
console.log(valueInNumber); 
console.log(typeof valueInNumber);

console.log("\n");

score = "33a";
valueInNumber = Number(score);
console.log(valueInNumber); 
console.log(typeof valueInNumber);
console.log(typeof NaN); //NaN: Not a Number(eg. 33abc)
// 1 = true; 0 = false
// "" = false (emty string)
// "text" = true

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


point1 = "1";
point2 = "2";
point3 = "0";

console.log("total points = "+Number(point1)+Number(point2)+Number(point3));
console.log(point1+point2+point3)
console.log();

console.log(null);
a=null;
console.log(a)