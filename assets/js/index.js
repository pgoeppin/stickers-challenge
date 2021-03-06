/* DISCLAIMER: si se debiesen separar los archivos, se tendria que hacer para cada index.html un archivo index.js por separado,
debido a que index.js busca primero la imagen del id click-img y al no encontrarlo tira error en los otros archivos html linkeados al index.js */

/* PARTE I: IMAGEN CON BORDE ROJO AL HACER CLICK. 
Nota: al usar las funciones getAttribute, setAttribute y removeAttribute lo que hace es buscar el atributo style EN EL HTML, NO EN EL CSS,
por lo tanto uno puede agregar/modificar/eliminar estilos sin necesidad de que se elimine todo lo trabajado en el CSS,
en este caso, solo se va a "pisar" el borde. */

let img = document.getElementById('click-img');
img.addEventListener('click', (e) => {
    if (img.getAttribute('style') == undefined) {
    img.setAttribute('style','border: 2px solid red')
    } else {
        img.removeAttribute('style')
    }
});

/* PARTE II: LLEVAR STICKERS */

let alertsticker = document.getElementById('alert-stickers');
let btnsticker = document.getElementById('btn-sticker');
btnsticker.addEventListener('click', (a) => {
    let stack1 = Number(document.getElementById('sticker1').value);
    let stack2 = Number(document.getElementById('sticker2').value);
    let stack3 = Number(document.getElementById('sticker3').value);
    let total_stack = stack1+stack2+stack3;
    if (total_stack > 0 && total_stack <= 10){
        alertsticker.innerHTML = `Llevas ${total_stack} stickers en total.`
    } else if (total_stack == 0){
        alertsticker.innerHTML = 'Aun no llevas stickers, por favor elige una cantidad.'
    } else{alertsticker.innerHTML = 'Llevas demasiados, recuerda que solo puedes llevar 10 stickers en total.'};
});

/* PARTE III: ADIVINAR PASSWORD.
Nota: Recordar que en el desafio se pide que salga un parrafo que diga "password 1 correcto"
 o "password 2 correcto" que son 911 y 714 respectivamente */

 let resultpw = document.getElementById("resultpw")
 let btnpw = document.getElementById("btn-pw")
 btnpw.addEventListener("click",(d) => {
     let firstDigit = document.getElementById("first-digit").value;
     let secondDigit = document.getElementById("second-digit").value;
     let thirdDigit = document.getElementById("third-digit").value;
     let concatpw = firstDigit + secondDigit + thirdDigit;
     let pass = Number (concatpw);
     if (pass == 911) {
         resultpw.innerHTML = 'Password 1 correcto'
     } else if (pass == 714) {
         resultpw.innerHTML = 'Password 2 correcto'
     } else {
         resultpw.innerHTML = 'Password incorrecto. Intente nuevamente.'
     };
 });