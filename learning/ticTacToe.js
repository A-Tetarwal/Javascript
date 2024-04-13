let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnO= true;    

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7], 
    [2,5,8], 
    [2,4,6], 
    [3,4,5], 
    [6,7,8]
];

boxes.forEach(function(boxx){
    boxx.addEventListener("click", function(){
        if(turnO){
            boxx.innerText="O" ;
            turnO=false;
        } else {
            boxx.innerText="X";
            turnO=true;
        }
        boxx.disabled = true;

        checkWinner();
    })
})

const checkWinner = (function(){

})