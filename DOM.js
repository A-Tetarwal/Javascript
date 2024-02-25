/* 
DOM manipulation 

selecting with id
document.getElementById("myId"); --> #id- unique hoti hai

selecting with class
document.getElementsByClassName("myClass"); --> .class - class bahut saare elements ke liye same ho sakti hai

selecting with tag
document.getElemenstByTagName("myTag");

ORRRRR

Query Selector
document.querySelector("myId/myClass/tag");
returns first element

document.querySelectorAll(myId/myClass/tag);
returns node list
 */


// “4 Pillars of DOM”. The four pillars listed are:

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener


// 1.
let j1= document.getElementsByClassName("heading-class");
console.dir(j1);

let a = document.querySelectorAll(".heading-class"); // class selected
console.log(a);

let b= document.querySelector("#btton");// id selected
console.log(b);

let c = document.querySelector("button");// tag selected
console.log(c);

let d= document.querySelector("#com");

// 2. 
b.innerHTML= "नीचे वाला बटन देख";

// 3. 
b.style.backgroundColor= "black"
b.style.color="White"

// 4. 
c.addEventListener("click" ,function(){
    c.style.backgroundColor= "red";
    c.style.borderColor= "red";
})

d.addEventListener("click", function(){
    d.style.color="black";
    d.style.backgroundColor="white";
    d.innerHTML= "About me: IIIT Vadodara, BTech. CSE"
})


let btn= document.querySelector("#btn");

btn.addEventListener