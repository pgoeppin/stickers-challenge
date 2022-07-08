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