// let promise = new Promise( (resolve, reject) =>{

//     setTimeout(function sayMyName() {
//         console.log(" Hello World! ");
//     }, 10000);
//      resolve(1);
//  });

// // then and catch

// let Mypromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve("Promise Fullfilled");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// Mypromise.then((message) => {
//     console.log("Then Message " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// })

//  // Multiple Promises"

let promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "First");
})

let promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "Second");
})

let promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, "Third");
})

let promise4 = new Promise((resolve, reject)=>{
    setTimeout(reject, 4000, "Fourth");
})

Promise.all([promise1, promise2, promise3, promise4])
.then((values) => {
    console.log(values);
})
.catch((error) =>{
    console.log("error: "+ error);
})