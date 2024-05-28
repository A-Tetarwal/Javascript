const coding = ["js", "cpp", "rb", "swift"];

// callback function: pehle to iska naam nahin hota hai
// coding.forEach( function (val) {
//     console.log(val);
// })

// using arrow fn
// coding.forEach((vals)=>{
//     console.log(vals);
// })

// callback me function dena
// printme = (item) => {
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach((item, index, arr)=>{ // for each ke paas values, index, aur array bhi aata hai
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: "javascript",
        extension: ".js"
    },
    {
        langName: "java",
        extension: ".java"
    },
    {
        langName: "python",
        extension: ".py"
    }
]

myCoding.forEach((item)=>{ // databases me bahut useful hoga
    console.log(item.langName);
})