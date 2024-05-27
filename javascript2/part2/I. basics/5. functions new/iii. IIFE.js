// Immediately Invoked Function Expressions (IIFE)

(function connect(){
    // a named IIFI
    console.log(`DB CONNNECTED`);
})();  // yahan pe semicolon lagan hai

// SYNTAX 
// (function definition)()
// global scope ke pollution se problem hoti hai kayi bar, to usko remove/avoid krne ke liye IIFE use karte hain


// using arrow fn
(()=>{
    // unnamed IIFE
    console.log("Hello");
})();

// using parameter and arg
((name)=>{
    console.log(`hello, ${name}`);
})("Ashish");