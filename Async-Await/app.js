
// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside Timeout block")
//     }, 3000);
// }

// let output = getData();

//// await:

//fetch API :-

async function getData() {

    //get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
    // parse json - async
    let data = await response.json();
    console.log(data);
}

getData();