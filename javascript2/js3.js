// ************ Operations ************

let value = 3;
let negValue = -value;
// console.log(negValue);

//  +, - *, **(for power), /, %

console.log(1+"1"); //javascript left to right string uthata hai aur datatypes ke according kaam krta hai
console.log(1+1+"1") // output =>21
console.log("1"+1+1); //output =>111

// use parenthesis for cases such as console/log(3 + 4 * 5 % 3);
console.log(((3+4)*5)%3);



// ************ Comparison of datatypes ************

// comparison should be done between similar datatypes, avoid non-like datatype comparisons. DO CLEAN CODE ALWAYS, only it has value.

// interesting
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0); // comparison operators > < >= =< converts the null into a number, treating it as 0. while equality operator == doesn't do so. null(0)>0 -->false and null(0)>=0 is true.

// similar case with undefined, but undefined comared with 0 will give false in all comparisons.


// ************ case of === ************

/*
The triple equals (===) operator in JavaScript is a strict equality operator. It checks if two values are equal in both value and type. This is in contrast(दो व्‍यक्तियों या वस्‍तुओं में तुलना जो उनमें अंतर स्‍पष्‍ट करती है) to the double equals (==) operator, which performs type coercion(Type coercion is the automatic or implicit conversion of values from one data type to another, such as strings to numbers) before comparison.
For example, the following code will return true:
JavaScript
1 === 1;
This is because both operands are of the same type (number) and have the same value.
However, the following code will return false:
JavaScript
1 == "1";
This is because the operands are of different types (number and string). The double equals operator will perform type coercion and convert the string "1" to the number 1 before comparison. However, the triple equals operator will not perform any type coercion, so the two operands will be considered different.
It is generally recommended to use the triple equals operator instead of the double equals operator, as it can help to avoid unexpected results.
Here are some more examples of the triple equals operator in use:
JavaScript
true === true; // true
false === false; // true
null === null; // true
undefined === undefined; // true
1 === 1.0; // true
"hello" === "hello"; // true
[] === []; // false
{} === {}; // false
As you can see, the triple equals operator returns true only if the two operands are of the same type and have the same value.

*/