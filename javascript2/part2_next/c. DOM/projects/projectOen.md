# Project oen: Colora
## The color changer

### Solution Code

```javascript
console.log("A-Tetarwal");
    // // ______________________ method - 1: basic ______________________
    // // const body = document.querySelector("body");

    // // correct method
    // const boxes = document.querySelectorAll("#boxes .colora");

    // const grey = boxes[0];
    // const white = boxes[1];
    // const blue = boxes[2];
    // const yellow = boxes[3];

    // // below is not correct way of selecting, above is.
    // // const grey = document.querySelector("div:first-child");
    // // const white = document.querySelector("div:nth-child(2)");
    // // const blue = document.querySelector("div:nth-child(3)");
    // // const yellow = document.querySelector("div:nth-child(4)");
    
    // grey.addEventListener("click", () => {
    //     body.style.backgroundColor = "grey";
    // })
    // blue.addEventListener("click", () => {
    //     body.style.backgroundColor = "blue";
    // })

    // yellow.addEventListener("click", () => {
    //     body.style.backgroundColor = "yellow";
    // })

    // white.addEventListener("click", () => {
    //     body.style.backgroundColor = "white";
    // })


    // // ______________________ method - 2 ______________________
    // // going by for each loop
    // const body = document.querySelector('body')
    // // const div = document.querySelectorAll('#boxes .colora'); // this is a better
    // const divd = document.querySelectorAll(".colora");
    // // console.log(divd);

    // divd.forEach((eachDabba)=>{
    //     eachDabba.addEventListener('click', ()=>{
    //         body.style.backgroundColor = eachDabba.style.backgroundColor;
    //     })
    // })


    // ______________________ method - 3 ______________________
    const body = document.querySelector('body')
    const boxes = document.querySelectorAll(".colora");

    // setting ids, ye bydefault hum html me de skte hai, lekin vahan nahin thi isliye yahan likhna pada
    boxes.forEach((box)=>{
        box.setAttribute("id", box.style.backgroundColor)
    })

    boxes.forEach((box)=>{
        box.addEventListener("click", (evnt)=>{ // yahan pe event likhe bina bhi neeche iski scope me event console.log kr skte hain
            console.log(evnt);
            console.log(evnt.target);
            if (evnt.target.id === 'grey') { // ye id ooper html me honi chahiye, vrna se attribute se set krlo
                body.style.backgroundColor = evnt.target.id;
            }
            if (evnt.target.id === 'white') { // ye id ooper html me honi chahiye, vrna se attribute se set krlo
                body.style.backgroundColor = evnt.target.id;
            }
            if (evnt.target.id === 'blue') { // ye id ooper html me honi chahiye, vrna se attribute se set krlo
                body.style.backgroundColor = evnt.target.id;
            }
            if (evnt.target.id === 'yellow') { // ye id ooper html me honi chahiye, vrna se attribute se set krlo
                body.style.backgroundColor = evnt.target.id;
            }
        })
    })
```
