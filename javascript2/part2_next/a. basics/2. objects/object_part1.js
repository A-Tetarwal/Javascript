

// ***** object literals : a way to declare literals *****

const mySym = Symbol("key1") // will use this symbol as key in JsUser

const JsUser = {
    Id: 403244,
    name: "Ashish",
    "full name": "Ashish Choudhary", // this is the reason for using [] in second way to access key elements
    age: 18,
    // mySym: "myKey1",  // not a way, not symbol, data type string here.
    [mySym]: "myKey1",  // correct way
    location: "Jaipur",
    email: "ashish@google.com",
    isLoggedIn: false,
    latestLoginDays: ["Monday", "Saturday"]
}

// first way to access, use it in general
// console.log(JsUser.location);

// second, more correct, less used way to access. Remember it to use in some cases
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);

// accessing symbol
// console.log(JsUser[mySym]);

// altering values
JsUser.email = "ashish@microsoft.dev.in"

// this will not allow changing of values
// Object.freeze(JsUser);

JsUser.email= "ashish@amazon.in"

// console.log(JsUser);

// adding function to JsUser Object, WE CAN TREAT FUNCTIONS AS VARIABLES
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // "this", is used cuz we're referencing to same object
}


console.log(JsUser.greeting); // function ka reference aayega
console.log(JsUser.greeting()); //good
console.log(JsUser.greetingTwo());

// console.log(JsUser);