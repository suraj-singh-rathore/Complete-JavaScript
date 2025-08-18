// (1).For Loop:-

// for(let i=1; i<=10; i++){
//     console.log("SURAJ")
// }

// Counting:-

// for(let i = 1; i<=6; i++) {
//     console.log(i);
// }

// Reverse Counting:-

// for( let i=10; i>0; i--){
//     console.log(i);
// }

// Break:-

// for (let i=1; i<=8; i++){
//     if(i==6)
//         break;
//     else
//         console.log(i);
// }

// Continue:-

// for(let i=1; i<=5; i++){
//     if(i==3)
//         continue;
//     else
//         console.log(i);
// }

// (2). While Loop:-

// let i = 1;
// while(i <= 10) {
//     console.log("SURAJ");
//     i++;
// }

// Continue:-

// let i = 1;
// while(i < 5) {
//     if(i == 3){
//         i++;
//         continue;
//     }
//     else
//         console.log(i);
//     i++;
// }

// do-while Loop:-

// let i = 1;
// do{
//     console.log("SURAJ");
//      //Updation
//       i++;
// } while(i<=10);

//counting through do-while loop:-

// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<=7);

///// Strings:-

// let firstName = "Suraj";
// let lastName = 'singh';

//  let name = `Suraj
//  singh
//  Rathore`;

//  console.log(name);

// let firstName = new String("Suraj Singh");
// console.log(firstName);


// let op1 = 'English ';
// let op2 = 'HINDI';

// console.log(op2.length);

// let finalAns = `${op1}${op2}`;
// console.log(finalAns);

// let ans = op1 + op2;
// console.log(ans);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());

// let str = "Rathore";
// //console.log(str.substring(2,5));
// console.log(str.substring(2));

// Split:-

let sentence = "Hello \\Jee \\Kaise \\ho \\Saare";

let words = sentence.split('\\');

console.log(words);

console.log(words.join(' '));