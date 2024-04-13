let h1= document.querySelector("h1");
let button= document.querySelector("button");
let body = document.querySelector("body");

let flag=0;
button.addEventListener("click", function(){
    if(flag==0){
        h1.innerHTML= "White";
        h1.style.color="black";
        button.innerHTML="Black";
        button.style.backgroundColor="Black";
        button.style.color="white";
        body.style.backgroundColor="white";
        flag=1;
    }else{
        h1.innerHTML= "Black";
        h1.style.color="white";
        button.innerHTML="White";
        button.style.backgroundColor="White";
        button.style.color="Black";
        body.style.backgroundColor="Black";
        flag=0;
    }
})