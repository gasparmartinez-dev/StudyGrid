const avatarActual = document.getElementById('currentAvatarContainer');
const avatarMenu = document.getElementById('avatarMenu');
const avatarSeleccionado = document.getElementById('avatar-seleccionado');
const opciones = document.querySelectorAll('.option');

const formulario = document.querySelector('form');

avatarActual.addEventListener('click', () => {
    avatarMenu.classList.toggle('active');
});

opciones.forEach(option => {
    option.addEventListener('click', (e) => {
        const newSrc = e.target.src;
        avatarSeleccionado.src = newSrc;
        localStorage.setItem('userAvatar', newSrc);
        avatarMenu.classList.remove('active');
    })
})

function crearcuenta(event){
    if(event) event.preventDefault();

    const nombre = document.getElementById('username').value;
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;
    const avatarSeleccionado = document.getElementById('avatar-seleccionado').src;

    if(nombre === "" || mail === "" || password === ""){
        alert("Por favor, rellena todos los campos.");
        return;
    }

    localStorage.setItem('username', nombre);
    localStorage.setItem('avatar', avatarSeleccionado);

    window.location.href = "dashboard.html";
}
formulario.addEventListener('submit', crearcuenta);