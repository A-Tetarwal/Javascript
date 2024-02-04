// for loop
console.log('using for loop');
console.log('table of 2')
for(let x=0; x<=20; x=x+2){
    console.log(x);
}

console.log('sum of first n no.')
let sum=0;
for(let i=1; i<=400 ;i++){
    sum+=i;
}
console.log(sum);

// while loop
console.log('using while loop')
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// do-while loop
console.log('using do-while loop')
do{
    console.log(i);
    i++;
}
while(i<=10);

// for-of loop -> strings aur arrays ke upar loop lgane mein  help krta hai
console.log('using for-of loop')
let str = 'JavaScript';

let length = 0;
for(let val of str){
    console.log('val=', val);
    length++;
}
console.log("length of above string is "+ length);


// for-in loop -> ye wala objects ke liye use hta hai, aur arrays ke liye bhi
console.log('for-in loop');

const pen={
    Name: "Parker Jotter Standard CT Ball Pen",
    colour: "black",
    Rating: "4/5, 7000+ Ratings",
    Offer_Price_in_Rs: 270,
    Original_Price: 285,
    isDeal: true
};

let no=0;
for(let key in pen){
    console.log('key: ',key + ' | value = ', pen[key])
    no++;
}
console.log('total keys are '+ no);


// practice question 1: print all even no. from 0 to 100
let totalNo=0;
for(let i=1; i<=100; i++){
    if(i%2===0){
        console.log(i)
        totalNo++;
    }
}
console.log("total even no. = "+totalNo);

// practice question 2: create a game wher you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value

// version 1
let guess= prompt("guess a number");
for(let p=1; p>=0; p++){
    
    if(guess==3){
        console.log("You guess it correct");
        break;
    }
    else{
        guess= prompt("you guessed wrong number. Guess again")
        console.log("you guessed wrong number");
    }
}

// version 2

// let gameNum = 25;
// let userNum = prompt("Guess the game number");

// while(userNum != gameNum){
//     userNum = prompt("you guessed wrong. Guess again")
// }
// console.log("congrats, you entered the right no.")

