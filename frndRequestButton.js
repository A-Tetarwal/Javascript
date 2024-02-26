let button= document.querySelector("button");

let flag=0;
button.addEventListener("click", function(){
    if(flag==0){
        button.style.backgroundColor="white";
        button.innerHTML="Request Sent";
        button.style.color="black";
        flag=1;

        setTimeout(function() {
            alert("Friend Added");
            button.innerHTML="Friend";
        }, 500); // Adjust the delay time (in milliseconds) as needed
        
        
    }else{
        button.style.backgroundColor="#3b5998";
        button.innerHTML="Add Friend";
        button.style.color="white";
        flag=0;

        setTimeout(function() {
            alert("Cancelled Request");
        }, 500); // Adjust the delay time (in milliseconds) as needed

    }
})