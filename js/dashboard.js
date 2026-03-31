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