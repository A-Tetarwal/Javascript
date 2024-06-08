// basic syntax
() => {}

// eg
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// now implicit return
// const addTwo = (num1, num2) => num1 + num2; // THIS ALSO DOESN'T NEED RETURN KEYWORD
// const addTwo = (num1, num2) => (num1 + num2); // using () won't need return keyword, using {} will need it. Will be used in reactJs

const addTwo = (num1, num2) => ({username: "Ahsihs"}); // returning object also needs wrapping by ()(parenthesis)


console.log(addTwo(3,5));


// --------- additional ---------
/*
Summary
Here's a quick summary of the different syntaxes:

Function Declaration: function name() { ... }
Function Expression: const name = function() { ... };
Arrow Function: const name = () => { ... };
Method Definition in an Object: const obj = { name() { ... } };
Class Method: class C { name() { ... } }
Generator Function: function* name() { yield ...; }
IIFE: (function() { ... })();
Async Function: async function name() { ... }
Async Arrow Function: const name = async () => { ... };
Each of these methods has its own specific use cases and advantages, depending on the context in which it is used.
*/