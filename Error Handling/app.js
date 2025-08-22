// Error Handling:-

// Complile time error:

//  //syntax error-

// console.log(1;

//  // Runtime error:

//  // Reference Error-

//console.log(a);

//  // Handling:-

// try{
//     console.log("try block starts here")
//     console.log(x);
//     console.log("try block ends here")
// }
// catch(err){
//     // define krte h, error k sath kya krna chahte hai
//     // -retry logic
//     // -fallback mechanism
//     // -logging
//     // -custom error
//     console.log("I am Inside Catch Block")
//     console.log("Your error is here:", err);
// }

// console.log(x);

//  // finally block - will run everytime.

//  try{
//     console.log("try block starts here")
//     console.log(x);
//     console.log("try block ends here")
// }
// catch(err){
//     // define krte h, error k sath kya krna chahte hai
//     // -retry logic // -fallback mechanism // -logging // -custom error
//     console.log("I am Inside Catch Block")
//     console.log("Your error is here:", err);
// }

// finally{
//     console.log("I will run everytime, as i am finally block")
// }

// /throw : custom error created by ownself:-

// try {
//     // Reference error
//     console.log(x);
// }
// catch(err) {
//     throw new Error("First declare then print");
// }

let errorCode = 100;
if(errorCode == 100) {
    throw new Error("Invalid Json");
}