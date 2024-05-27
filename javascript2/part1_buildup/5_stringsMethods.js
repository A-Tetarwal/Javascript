const { log } = require("console");

const name = "Ashish";
let repoCount = "16";

// not a modern practice
// console.log(name + repoCount + " value");

// recommended to use bacticks
// console.log(`The name is ${name} and his repo count is ${repoCount}`);

// another way to declare strings
const gameName = new String("bigShot")
// console.log(typeof gameName);

// travesing through each element of gameName String
// for(i=0; i<gameName.length; i++){
//     console.log(gameName[i]);
// }

// console.log(gameName.toUpperCase());

// original value reamins same, see
// console.log(gameName);

// charAt() method for string 
// console.log(gameName.charAt(0));

// indexOf() method, reverse of charAt()
// console.log(gameName.indexOf("b"));

// slicing a string
const newString = gameName.substring(1,6); // 6th character won't be included
// console.log(newString);

// putting negative values in slice(), is it allowed in it. negative values se reverse mein start hoga
// console.log(gameName.slice(-5, 4));
// substring ignores negative values


let Name = "  aah...Vi.....    ";
console.log(Name);
// trim() will remove that extra spaces in Name
// console.log(Name.trim());

// replace() method
const url = "https://github.com/a%20tetarwal"
console.log(url.replace("%20", "-"));

// checking if any string includes something
console.log(url.includes("tetarwal"));
console.log(url.includes("ashish"));

// split() method
let hello = new String;
hello = "hey you, are you there";
console.log(hello);

const words = hello.split(" ");
console.log(words[2]);
// or
console.log(words); // will return array of words
console.log(hello.split(" ")[3]);
