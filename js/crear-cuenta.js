const avatarActual = document.getElementById('currentAvatarContainer');
const avatarMenu = document.getElementById('avatarMenu');
const avatarSeleccionado = document.getElementById('avatar-seleccionado');
const opciones = document.querySelectorAll('.option');

avatarActual.addEventListener('click', () => {
    avatarMenu.classList.toggle('active');
});

opciones.forEach(option => {
    option.addEventListener('click', (e) => {
        const newSrc = e.target.src;
        avatarSeleccionado.src = newSrc;
        avatarMenu.classList.remove('active');
    })
})