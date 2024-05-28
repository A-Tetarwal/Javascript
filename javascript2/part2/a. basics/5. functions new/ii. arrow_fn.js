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