window.addEventListener('DOMContentLoaded', () => {
    const navAvatar = document.getElementById('navAvatar');
    const username = document.getElementById('username-field');

    const avatarSeleccionado = localStorage.getItem('avatar');
    const nombre = localStorage.getItem('username');

    if (avatarSeleccionado){
        navAvatar.src = avatarSeleccionado;
    }
    else {
        navAvatar.src = "assets/avatar/default.png";
    }
    username.textContent = nombre;
})

const btnNuevaAsginatura = document.getElementById('addAsignatura');
const listaAsignaturas = document.getElementById('listaAsignaturas');

btnNuevaAsginatura.addEventListener('click', () => {
    const nombreAsignatura = prompt("Indica el nombre de la asignatura:");

    if(nombreAsignatura){
        const nuevaAsignatura = document.createElement('li');
        nuevaAsignatura.textContent = nombreAsignatura;
        nuevaAsignatura.classList.add('asignatura');
        listaAsignaturas.appendChild(nuevaAsignatura);
    }
    else{
        alert("Debes introducir un nombre para la asignatura");
    }
});