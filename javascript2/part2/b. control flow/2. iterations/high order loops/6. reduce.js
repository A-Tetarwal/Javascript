// reduce with arrow function

const vals = [1,2,3];
// const myTotal = vals.reduce((acc, currVal)=>{
//     console.log(`acc: ${acc}, curr: ${currVal}`);
//     return acc + currVal;
// }, 0);

// console.log(myTotal);

// with normal function
// const newTotal = vals.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc}, curr: ${currVal}`);
//     return acc + currVal;
// }, 0);

// console.log(newTotal);


// with quick syntax
// const goodTotal = vals.reduce((acc, currVal) => acc+currVal, 0)
// console.log(goodTotal);

// shopping cart
const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "app dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const toPay = shoppingCart.reduce((acc, item)=> acc+item.price, 0);
console.log(toPay);