function one() {
    const username = "jaani"

    function two() {
        const website =  "fi4.in"
        // console.log(typeof [...username, ...website]);
    }
    // console.log(website); // can be accessed from here, error milega
    // child element can access variables from parent, but parent can't... for basic this is closure
    two();
}
one();

if (true) {
    const username = "jaani"
    if(username === "jaani"){
        const website = " fi4.web"
        // console.log(username+website);
    }
    // console.log(website); // error 1 (scope)
}
// console.log(username); // error 2 (scope)



// +++++ interesting +++++

addOne(5) // can be called here in below case in js, no error
function addOne(num) { // called a function
    return num+1
}


// addTwo(5) // can't be called here, it will lead to an error
const addTwo = function(num){ // although a funtion, called an expression(like a vairable, variavbles in js can hold anything)
    return num+2
}
addTwo(5)