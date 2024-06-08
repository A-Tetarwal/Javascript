const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls, cryptography, network related

  setTimeout(() => {
    console.log("Async task done");
    resolve();
  }, 4000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

// variable me store krna zaruri nahin hai
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve(); // ye lkhna zaruri hai vrna malum kaise chalega 'then' ko ki resolve ho gya hai ab andar wala function execute krwa do
  }, 3000);
}).then(() => {
  console.log("async 2 resolved");
});

// data kaise aata hai
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Fi-4", email: "fi4@example.com" });
  }, 2000);
});

promiseThree.then((userr) => {
  console.log(userr.email);
});

// promiseFour, reject use krenge
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "jaani", password: "123" });
    } else {
      reject("ERR_SOMETHING_WENT_WRONG");
    }
  }, 1000);
});

promiseFour
  .then((userrr) => {
    console.log(userrr);
    return userrr.username; // jo return kiya hai vahi agle 'then' mein jayega, isko bolte hain chaining
  })
  .then((username) => {
    console.log(username);
  })
  .catch((userrr) => {
    console.log(userrr);
  })
  .finally(() => console.log("the prommise is either resolved or rejected"));


// promiseFive
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERR_JS_WENT_WRONG");
    }
  }, 0);
})
// }).then((user) => console.log(user.username, user.password)); // aise bhi then lga skte hain

// const consumePromiseFive = async () => {}
async function consumePromiseFive(){
  // const response = await promiseFive;
  // console.log(response); // bina try catch ke use kiya hai, agr arror aa gya toh? isiliye async await me try-catch use krna h
  
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("ERR_OCCURED"); // ya
    console.log(error);
  }
}

consumePromiseFive();


// -------- using with url --------
async function getAllUsers() {
  try {
    const response = await fetch('https://leetcode-stats-api.herokuapp.com/jaaniafsana418');
    // const data = response.json(); // ye bhi time leta hai, to isko bhi await krwana pdega
    
    const data = await response.json();
    // console.log(typeof data); // object
    console.log(`Questions on leetcode: ${data.totalSolved}/${data.totalQuestions}`); 
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();


// using promises, maybe? with some more data
fetch('https://leetcode-stats-api.herokuapp.com/KG-Profile')
.then((user) => { // user or response, kuchh bhi bolo
  return user.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))