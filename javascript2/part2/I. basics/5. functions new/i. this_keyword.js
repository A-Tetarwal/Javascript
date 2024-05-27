// aapko jb bhi curent context ko refer karna hai, 
// iss curly braces me jaise(below) ke andar 
// to uske saath hum use krte hain "this" keyword, 
// NOT FOR SINGLE INDIVIDUAL FUNCTIONS (because in those console.log(this) will return something(told down) but this.username won't return anything)

const user = {
    username: "jaani",
    price: 1999,

    welcomeMsg: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // output: { username: 'jaani', price: 1999, welcomeMsg: [Function: welcomeMsg] }
    }
}

user.welcomeMsg()
// console.log(user.welcomeMsg()); // reference milega

// user.username = "sam"
// user.welcomeMsg() // name isliye change ho payega kyunki hmne "this" keyword use kiya hai, otherwise we can't 

// console.log(this);  // will output an empty object {}
// in browser above log will return Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// due to difference in context

function ekThis(){
    let username = "ashish"
    console.log(this); /* output: <ref *1> Object [global] ..... */
    console.log(this.username); // output: undefined
}
// ekThis()
// console.log(ekThis());

const ekAurThis = function(){
    let username = "ashish"
    console.log(this); /* output: <ref *1> Object [global] ..... */
    console.log(this.username); // output: undefined
}
// ekAurThis()
// console.log(ekAurThis());



// _______________ Arrow functons _______________

const function1 = () => {
    let username = "ashish"
    console.log(this); // output: {}
    console.log(this.username); // output: undefined
}
// function1();