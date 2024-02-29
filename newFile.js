let elem1 = document.querySelector("#elem1");
let elemImg= document.querySelector("#elem1 img");

elem1.addEventListener("mousemove", function(dets){
    elemImg.style.left = dets.x+"px"
    elemImg.style.top = dets.y+"px"
})