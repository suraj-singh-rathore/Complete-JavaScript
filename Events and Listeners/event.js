// function changeText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Sir"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);
// //fpara.removeEventListener('click', changeText);

// //||||||||||||||||||||||||||||||||||||||||||||||||||


// function changeText(event) {
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Sir"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

////||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Clicked"
// });

// // Avoiding too many listener:-

// let paras = document.querySelectorAll('p');

// for (let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', function() {
//         alert("You have Clicked on para: " + (i+1));
//     })
// }

///////////////////////////// TARGET PROPERTY:-

// let paras = document.querySelectorAll('p');

function alertPara(event) {
    // // For Span Tag:-
    // if(event.target.nodeName === 'SPAN'){
    alert("You have Clicked on para: " + event.target.textContent);
   //}
}

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

let mydiv = document.getElementById('Wrap');

document.addEventListener('click', alertPara);
