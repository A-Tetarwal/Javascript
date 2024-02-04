// This is a comment that prints hello world

console.log("Hello world!");

/* Another way to write comment, 
helps in writing long comment */

// arithmetic operators
console.log("arithmetic operators")
let a=5;
let b=2;

console.log("a = ", a, "b = ", b);

console.log("a+b =", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b); // modulus operator
console.log("a**b = ", a**b); // exponentiation operator

//unary operators
console.log("unary operators")
a++;
console.log("a++ = ", a);
a--;
console.log("a-- = ", a);
console.log("a++ = ", a++);

// assignment operators
console.log("assignment operators")
a=5; b=2;
console.log("a = ", a, "b = ", b);

// practice question 1
let p= prompt("Enter a number");

if (isNaN(p)) {
    console.log("Please enter a valid number");
}
if(p%5===0){
    console.log(p, "is a multiple of 5")
}
else{
    console.log(p,"is not a multiple of 5")
}

// practice question 2
let marks= prompt("Enter marks");
if(isNaN(marks)){
    console.log("please enter marks")
}
else if(90<=marks<=100){
    console.log("Grade:A")
}
else if(70<=marks<=89){
    console.log("Grade:B")
}
else if(60<=marks<=69){
    console.log("Grade:C")
}
else if(50<=marks<=59){
    console.log("Grade:D")
}
else if(0<=marks<=49){
    console.log("Grade:F")
}


