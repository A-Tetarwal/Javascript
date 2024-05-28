function calculateCartPrice(...num1){ // ye ... rest operator hai
    return num1
}

console.log(calculateCartPrice([2,3,4,5],1,2,3,4,5));


// passing object in function
const user = {
    namee: "jaani",
    price: 199
}

function objHandle(anyobject){
    console.log(`Username is ${anyobject.namee} and price is ${anyobject.price}`);
}

// objHandle(user)

// other way, passed object directly
objHandle({
    namee: "jaani",
    price: 399
})

// passing array in function
const myNewArray = [200, 400, 100, 600]

function returnAllValues(newArray){
    return newArray; // we can get any value using newArray[index]
}

// console.log(returnAllValues(myNewArray));
// or, directly
console.log(returnAllValues(["helo", 3, "n", 6,7,8,9]));