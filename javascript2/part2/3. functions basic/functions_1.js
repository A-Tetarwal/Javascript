function sayMyName(){
    console.log("Ashish");
}

// sayMyName  // ye reference hai function ka
// sayMyName() // ye execution hai

// declaring add function

// function addTwoNums(num1, num2){
//     console.log(num1+num2);
// }


// again

function addTwoNums(num1, num2){
    // let result = num1 + num2
    // return result
    // or
    return num1+num2
} 
const result = addTwoNums(4,5)
// console.log("result: ", result); 

function loginUserMessage(username = "mia") { //minimum se minimum mia naam rhega
    if (!username) { // equivalent to username === undefined
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("jaani"));
console.log(loginUserMessage()); // empty string, "undefined just logged in"