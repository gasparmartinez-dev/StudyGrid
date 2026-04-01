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

function agregarAsignatura(){
    //Capturar el nombre de la tarea

    const listaAsignaturas = document.getElementById('listaAsignaturas');
    const nuevo_li = document.createElement('li');

    nuevo_li.classList.add('asignatura');
}