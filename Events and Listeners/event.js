// function changeText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Sir"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);
// //fpara.removeEventListener('click', changeText);


function changeText(event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Sir"
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);

