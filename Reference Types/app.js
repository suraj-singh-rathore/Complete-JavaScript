// let obj = {
//     name : "Suraj",
//     age: 21,
//     weight: 70,
//     height: "5ft 8 inch",
//     greet: function () {
//         console.log("hello je kaise ho");
//     }
// };

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// // Creation of array:-

//let arr = [1,2,3,4,5];

// //Array Constructor:

// let brr = new Array('Sun', 1, true);
// brr.push('Singh');  
// brr.pop('Singh');

// brr.shift();
// brr.unshift('suraj singh');

// brr.push(21);
// brr.push(92);
// brr.push(45);
// brr.push(30);

// console.log( brr.slice(2,4));

// brr.splice(1,2, 'Ravi');

// console.log(brr);

// console.log(brr[2]);

// console.log(typeof(brr));


// //Map:

// let arr =[10,20,30,40,50];

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray =arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray);

// //filter:

// let arr = [10,20,30,22,11,35,51,7];

// let evenArray = arr.filter((number) => {
//     //return number%2 === 0;
//     if(number%2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

//console.log(evenArray)

// // |||||||||||||||||||||||||||||||||||||||||||||||||||

// let arr = [1,2, 'love', 'Ravi', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string') {
//         return true;
//     }
//     else {
//         return false;
//     }
// })

// console.log(ans)


// // Reduce:

// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// }, 0)

// console.log(ans);

// //sort:

// let arr = [2,4,5,9,3,1,100];

// //arr.sort((a, b) => a - b);
// arr.sort((a, b) => b - a);

// console.log(arr);

// //indexof:

// let arr = [2,4,5,9,3,1,100];

// console.log(arr.indexOf(9));

// //find:



// //Loops:-
  // //forEach:

// let arr = [10,30,33,43];

// let length = arr.length;
// console.log("length: ", length);

// // //Traditional loop;

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// arr.forEach((value,index) => {
//     console.log("Number: ",value, "Index: ", index);
// })

// // for-in:

// let obj = {
//     name : "Suraj",
//     age: 21,
//     weight: 70,
//     height: "5ft 8 inch",
//     greet: function () {
//         console.log("hello je kaise ho");
//     }
// };

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// // //for of :

// let arr = [10,30,33,43];

// for(let value of arr){
//     console.log(value);
// }

// /// /// Arrays in function:-

let arr = [10,30,33,43];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for(let index=0; index<len; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

// /// in Simple:

function getSum(arr) {
    let sum=0;
    arr.forEach((value) =>{
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);