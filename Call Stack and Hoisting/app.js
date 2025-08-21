// // // function & Variable hoisting:-

// console.log(age);
// var age = 20;
// // console.log(age);

// // sayMyName("Siraj")

// // function sayMyName(finalName) {
// //     console.log(finalName);
// // }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||\
// function => first class citizen.

//  //using function expresion- hoisting didn't work:-
                      // // Example:

// sayHello();
// let sayHello = function() {
//     console.log("Hello how are you are");
// }

//  class level hoisting - it is not possible:-

// //const object1 = new A();
// class A{

// }

// const object1 = new A();

// // Function Call Stack (LIFO):-
          // assigning function to variable:-


// let greet = function () {
//     console.log("Greeting for the day")
// }

// greet();

// // Function as an argument:-

// function greetMe(greet, fullName) {
//     console.log("hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("Greeting for the day")
// }

// greetMe(greet, "Suraj");


// //return function:-

// function solve(num) {
//     return function(num) {
//         return num * num;
//     }
// } 

// let ans = solve();

// let finalans = ans(5);
// console.log(finalans);

// // use function in data structure :-

// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//      function(a,b) {
//         return a*b;
//     },
// ];

// let first = arr[0];
// let ans = first(3,5);
// console.log(ans);

// // as an object:-

let obj = {
    age: 23,
    wt: 55,
    ht: 160,
    greet: ()=> {
        console.log("Namastey Dunia");
    }
}

console.log(obj);
obj.greet();