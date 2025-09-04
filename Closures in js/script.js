// function init() {
//   var name = "Suraj Singh"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


function outerfunction() {
  let name = "Suraj";

  function innerfunction() {
    console.log(name);
  }

  return innerfunction;
}
let inner = outerfunction();

inner();