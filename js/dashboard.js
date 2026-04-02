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


const modal = document.getElementById('modalTarea');
const btnTarea = document.getElementById('btn-crearTarea');
const btnAddTarea = document.getElementById('btn-addTarea');
const btnCancelarTarea = document.getElementById('btn-cancelarTarea');
const listaTareas = document.getElementById('listaTareas');

btnTarea.addEventListener('click', () => {
    modal.classList.remove('modal-oculto');
});

btnAddTarea.addEventListener('click', () => {
    const nombre = document.getElementById('inputNombreTarea').value;
    const fecha = document.getElementById('inputFechaTarea').value;

    if(nombre && fecha) {
        const nuevo_li = document.createElement('li');
        nuevo_li.classList.add('tarea');

        const spanNombre = document.createElement('span');
        spanNombre.textContent = nombre;
        spanNombre.classList.add('spanTarea');

        const spanFecha = document.createElement('span');
        spanFecha.textContent = fecha;
        spanNombre.classList.add('spanTarea');

        const papelera = document.createElement('img');
        papelera.src = "assets/icons/trash-negro.png";
        papelera.alt = "papelera";
        papelera.classList.add('papelera-tarea');

        papelera.addEventListener('click', () => {
            nuevo_li.remove();
        })

        nuevo_li.appendChild(spanNombre);
        nuevo_li.appendChild(spanFecha);
        nuevo_li.appendChild(papelera);

        listaTareas.appendChild(nuevo_li);
        

        modal.classList.add('modal-oculto');
    }
    else{
        alert('Debes rellenar los dos campos.');
    }
});

btnCancelarTarea.addEventListener('click', () => {
    modal.classList.add('modal-oculto');
});
