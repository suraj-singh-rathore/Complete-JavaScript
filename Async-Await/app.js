async function getData() {
    setTimeout(function() {
        console.log("I am inside Timeout block")
    }, 3000);
}

getData();