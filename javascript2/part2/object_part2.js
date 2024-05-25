// const tinderUser = new Object{}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Mahipal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
console.log(Object.keys(tinderUser)); // array
console.log(Object.values(tinderUser)); // array
console.log(Object.entries(tinderUser)); // array of each property and element

// checking property in object
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ashish",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// ***** object methods *****
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// merging, way 1
// const obj4 = Object.assign(obj1, obj2, obj3)  
// console.log(obj4);
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// merging, way 2
// syntax of spread: const myName = {...obj1, .......}
console.log({...obj1, ...obj2, ...obj3}); //asaan, simple, latest
