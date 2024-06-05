# Project oen: Colora

## The color changer

### Solution Code

```javascript
console.log("Project1");
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
const body = document.querySelector("body");
const boxes = document.querySelectorAll(".colora");

// setting ids, ye bydefault hum html me de skte hai, lekin vahan nahin thi isliye yahan likhna pada
boxes.forEach((box) => {
  box.setAttribute("id", box.style.backgroundColor);
});

boxes.forEach((box) => {
  box.addEventListener("click", (evnt) => {
    // yahan pe event likhe bina bhi neeche iski scope me event console.log kr skte hain
    console.log(evnt);
    console.log(evnt.target);
    if (evnt.target.id === "grey") {
      // ye id ooper html me honi chahiye, vrna se attribute se set krlo
      body.style.backgroundColor = evnt.target.id;
    }
    if (evnt.target.id === "white") {
      // ye id ooper html me honi chahiye, vrna se attribute se set krlo
      body.style.backgroundColor = evnt.target.id;
    }
    if (evnt.target.id === "blue") {
      // ye id ooper html me honi chahiye, vrna se attribute se set krlo
      body.style.backgroundColor = evnt.target.id;
    }
    if (evnt.target.id === "yellow") {
      // ye id ooper html me honi chahiye, vrna se attribute se set krlo
      body.style.backgroundColor = evnt.target.id;
    }
  });
});
```

# Project two

## BMI calculator

### Soloution Code

```javascript
console.log("Project2");
const form = document.querySelector("form");

// yahan pe agar height aur wt ko lenge to empty values milengi, aur hme agr jis time pe click kr rhe hai usi time pe value lena chahte hain to usi event yani ki form me lena in values ko better rhega. basically it depends on our use case.
// const height = parseInt(document.querySelector('#weight').value);

// now
form.addEventListener("submit", (evnt) => {
  evnt.preventDefault();

  // inko idhar select krna better hai, outerScope me nahin
  const weight = parseInt(document.querySelector("#weight").value); // isko int me parse kr denge, agr string me input hoga to
  const height = parseInt(document.querySelector("#height").value);
  const results = document.querySelector("#results");

  if (height === 0 || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
  }

  const button = document.querySelector("Submit");
});
// console.log(height);
// console.log(weight);
```

# Project three

## Digital clock

### Solution Code

```javascript
console.log("Project3");
const clock = document.querySelector("#clock");
// const clock = document.querySelector("#clock");

// storing and displaying time
// let date = new Date();
// clock.innerHTML = date.toLocaleTimeString(); // to update it each second, we'll use setInterval function

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

# Project four

## Guess the number

### Solution Code

```javascript
console.log("Project4");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const number = parseInt(document.querySelector("#number").value);
  const guess = Math.round(Math.random() * 10);
  const guessed = document.querySelector("#guessed");

  if (number === guess) {
    guessed.innerHTML = `you guessed it right ${number}`;
  } else {
    guessed.innerHTML = `nope try again ${number}`;
  }
});
```

# Project five

## Background color changer

### Solution Code

```javascript
// hmko iske liye random color(hex code mein) generator krna pdega
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#"; // hex color code starts from '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // updating colour string
  }
  return color;
};

// we'll do it without using disabled
let intervalId;
const startChangingColor = () => {
  const changeBgColor = () => {
    document.querySelector("body").style.backgroundColor = randomColor();
  };

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 500);
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
```

# Project six

## Keyboard key detection

### Solution Code

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class = 'color'>
            <table>
                <tr>
                    <th>key<th>
                    <th>keyCode<th>
                    <th>keyName<th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "space" : e.key}<td>
                    <td>${e.keyCode}<td>
                    <td>${e.code}<td>
                </tr>
            </table>
        </div>
        `;
});
```
