// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      let success = true; // Change this to false to see the rejected state
      
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Operation failed!");
      }
    }, 2000); // Wait for 2 seconds
  });
  
  // Using the Promise
  myPromise
    .then((message) => {
      // This block runs if the promise is fulfilled
      console.log("Success: " + message);
    })
    .catch((error) => {
      // This block runs if the promise is rejected
      console.error("Error: " + error);
    })
    .finally(() => {
      // This block runs regardless of the promise being fulfilled or rejected
      console.log("Operation completed.");
    });