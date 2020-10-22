//Ejercicio 1
document.title = 'Ahora trabajando con DOM dinámico';


//Ejercicio 2
let secciones = document.getElementsByTagName('section');
[...secciones].forEach((elem, index) => elem.id = "seccion_" + index);


//Ejercicio 3
let p = document.getElementsByTagName('p');
[...p].forEach(elem => elem.style.fontSize = "7");


//Ejercicio 4
let enlace = document.getElementsByTagName('a');
[...enlace].forEach(enl => {
    enl.addEventListener('focus', () => {
        if (!enl.focus) {
            enl.style = {};
            enl.classList = "";
        }
    })
})


//Ejercicio 5
let check = document.createElement('input');
check.type = "checkbox";
check.value = "Cambiar imagen";
let boton = document.getElementById('boton');
check.addEventListener('change', () => {
    check.checked ? boton.disabled = false : boton.disabled = true;
});
let foto = document.getElementById('foto');
foto.insertAdjacentElement(beforeend, check);


//Ejercicio 6
boton.addEventListener('click', () => {
    if (!check.disabled) {
        check.disabled = true
        foto.src = "https://como-funciona.com/wp-content/uploads/2019/07/qu%C3%A9-es-la-inform%C3%A1tica.jpg";
    }
})