let cont = document.querySelector("#container");

let likeIcon = document.querySelector("i");

let flag=0;
cont.addEventListener("dblclick", function(){
    if(flag==0){
        likeIcon.style.transform= "translate(-50%, -50%) scale(1)";
        likeIcon.style.opacity="0.7";
        console.log("Hello");

        setTimeout(function(){
            likeIcon.style.opacity="0";
        }, 800);
    
        flag=1;
        setTimeout(function(){
            likeIcon.style.transform= "translate(-50%, -50%) scale(0)";
        }, 810);
    }else if(flag==1){
        likeIcon.style.transform= "translate(-50%, -50%) scale(1)";
        likeIcon.style.opacity="0.7";
        console.log("Hello");

        setTimeout(function(){
            likeIcon.style.opacity="0";
        }, 800);
    
        flag=0;

        setTimeout(function(){
            likeIcon.style.transform= "translate(-50%, -50%) scale(0)";
        }, 810);
    }
})