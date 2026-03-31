const formulario = document.querySelector('form');

function login(event){
    if(event) event.preventDefault();

    const nombre = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if(nombre === "" || password === ""){
        alert("Por favor, rellena todos los campos");
        return;
    }

    localStorage.setItem('username', nombre);

    window.location.href = 'dashboard.html';
}


formulario.addEventListener('submit', login);