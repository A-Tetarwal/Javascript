// ************ Data Types ************

// Primitive - these are call by value(whenever reference of thse is given, direct reference is not given, copy karke diya jata hai. jo bhi changes hum karenge vo copy mein honge)
//  7 types : string, boolean, null(typeof null - object), undefined, bigint, number and symbol

// Reference type (Non-primitive) : Array, Objects, Functions
// MASTER OBJECTS AND WEB-EVENTS IN BROWSER TO MASTER JAVASCRIPT



// symbol
const id = Symbol("hitout");
// const id = Symbol("itsMagic"); => ye nahin chalega
// const anotherId = Symbol("hitout"); => ye chalega
console.log(id);
console.log(typeof id);

const symbolOne = {}; // ye yahan humne ek empty object banaya hai, this is syntax of an object
symbolOne[id] = "itsMagic";
console.log(symbolOne[id]);
console.log(typeof symbolOne);

/* 
Let's summarize:

1. In JavaScript, Symbols are unique and immutable data types introduced in ECMAScript 2015 (ES6). Each call to `Symbol()` creates a new and distinct Symbol instance.
  
2. Constants declared with `const` cannot be redeclared or reassigned.

3. In the provided code:
   ```javascript
   const id = Symbol("hitout");
   const symbolOne = {};
   symbolOne[id] = "itsMagic";
   console.log(symbolOne[id]);
   ```

4. `id` is a constant variable storing a Symbol instance with the description "hitout".

5. `symbolOne` is an empty object. You use `id` as a property key for `symbolOne` and assign the value `"itsMagic"` to it.

6. When you log `symbolOne[id]`, it prints `"itsMagic"`.

7. The confusion arose from the misunderstanding that there might be two different Symbols with the same variable name `id`. However, in JavaScript, each call to `Symbol()` creates a new and unique Symbol instance, so `id` consistently refers to the same Symbol instance created with the description "hitout".

8. If you attempt to reassign a new value to `id` using the same variable name (`const id = Symbol("itsMagic");`), it would result in a syntax error because constants cannot be reassigned.

I hope this summary clarifies the discussion! Let me know if you need further assistance or clarification on any point.
*/





// ************ Memory ************

// stack(primitive) Heap(non-primitive)