// class human {
//     //propertiies
//     age = 16;  //public
//     #wt = 50;  //private
//     ht = 180;

//    // constructor:

//    constructor(newAge, newHeight, newWeight) {
//     this.age = newAge;
//     this.ht = newHeight;
//     this.#wt = newWeight;
//    }


//     //behaviour 

//     walking() {
//         console.log("I am Walking", this.#wt);
//     }

//     runnig() {
//         console.log("I am running")
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new human(30, 180, 60);
// console.log(obj.fetchWeight);

// obj.walking();


// //Default Parameter:-

// function sayName(fName = "Suraj", lName = "Singh") {
//     console.log("My Name is: ", fName, lName);
// }

// sayName("Ravi", "Kumar");
// //--------------------------------------------------------------------
// function sayName(fName = "Suraj", lName = fName.toUpperCase()) {
//     console.log("My Name is: ", fName, lName);
// }

// sayName();

// // If Default Parameter is set as an obj:
               ////obj:

// function solve(value = {age:15, wt:60,ht:178}) {
//     console.log("Hello je", value);
// }

// solve();

            ////array:

// function solve(value = ["sun", "moon", "star"]) {
//     console.log("Sky", value);
// }

// solve();

             // //Null & Undefined:

// function solve(value = "Rahul") {
//     console.log("Hello ->", value);
// }

// solve(undefined);


 // // we can send Function as Default Parameter:-

 function getAge() {
    return 29;
 }

 function utility(name = "John", age = getAge()) {
    console.log(name, " ", age);
 }

 utility();