let Add= document.querySelector("#add");
let strange= document.querySelector("h5");

let flag=0;
Add.addEventListener("click", function(){
    if(flag==0){
        Add.style.backgroundColor="white";
        Add.innerHTML="Request Sent";
        Add.style.color="black";
        Add.style.backgroundColor="#dadada";
        flag=1;

        setTimeout(function() {
            alert("Friend Added");
            Add.innerHTML="Remove";
        }, 500); // Adjust the delay time (in milliseconds) as needed
        
        strange.innerHTML="Friend";
        strange.style.color="green";
        
    }else{
        Add.style.backgroundColor="#3b5998";
        Add.innerHTML="Add Friend";
        Add.style.color="white";
        flag=0;

        setTimeout(function() {
        alert("Removed from Friends");
        }, 500); // Adjust the delay time (in milliseconds) as needed

        strange.innerHTML="Stranger";
        strange.style.color="rgb(255, 0, 200)";
    }    
})

