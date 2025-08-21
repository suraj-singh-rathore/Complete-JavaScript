// //function definition

// function sayMyName() {
//     console.log("Suraj")
// }

// // function use - function call

// sayMyName();

// //Counting:-
// function printCounting() {
//     for(let i=1; i<=100; i++) {
//     console.log(i);
//     }
// }

// printCounting();

// //Printing a Number as a parameter:-

// function printNumber(num) {
//     console.log("Printing Number;", num);
// }

// printNumber(5);

// //Finding average of 2 numbers:-

// function getAverage(num1, num2) {
//     let avg = (num1 + num2)/2;
//     console.log("Average:",avg);
// }

// getAverage(3,70);

// // //return function:-

// function getSum(a,b,c) {
//     let sum = (a+b+c);
//     return sum;
// }

// let ans = getSum(4,5,6);
// console.log("Printing Sum:", ans );

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }

// let ans = getMyName("Suraj", "Singh");
// console.log("Full Name:", ans);

// Function Expression:-   

// const getMultiplication = function(a,b) {
//     return a*b;
// }

// let ans = getMultiplication(4,30);
// console.log(ans);

// //||||||||||||||||||||||||||||||||||||||||||||||||||||||

// const SquareNumber = function(num) {
//     let ans = num**2;
//     return ans;
// }
 
// let ans = SquareNumber(7);
// console.log(ans);

// Arrow Functions:-

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}

console.log(getExp(2,4));