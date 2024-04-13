let mainDiv= document.querySelector("#main");
let cursor= document.querySelector(".cursor");

cursor.style.backgroundColor='yellow';
mainDiv.addEventListener("mousemove", function(details){
    cursor.style.left=details.x+"px";
    cursor.style.top=details.y+"px";
})