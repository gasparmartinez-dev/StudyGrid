window.addEventListener('DOMContentLoaded', () => {
    const navAvatar = document.getElementById('navAvatar');
    const username = document.getElementById('username-field');
    const usernameHeader = document.getElementById('nombre');
    const fecha = document.getElementById('fecha');

    const avatarSeleccionado = localStorage.getItem('avatar');
    const nombre = localStorage.getItem('username');

    if (avatarSeleccionado){
        navAvatar.src = avatarSeleccionado;
    }
    else {
        navAvatar.src = "assets/avatar/default.png";
    }
    const hoy = new Date();
    const fechaFormateada = hoy.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    fecha.textContent = fechaFormateada;
    username.textContent = nombre;
    usernameHeader.textContent = nombre;
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


const modalTarea = document.getElementById('modalTarea');
const btnTarea = document.getElementById('btn-crearTarea');
const btnAddTarea = document.getElementById('btn-addTarea');
const btnCancelarTarea = document.getElementById('btn-cancelarTarea');
const listaTareas = document.getElementById('listaTareas');

btnTarea.addEventListener('click', () => {
    modalTarea.classList.remove('modal-oculto');
});

btnAddTarea.addEventListener('click', () => {
    const nombre = document.getElementById('inputNombreTarea').value;
    const fecha = document.getElementById('inputFechaTarea').value;

    if(nombre && fecha) {
        const nuevo_li = document.createElement('li');
        nuevo_li.classList.add('tarea');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('checbox-tarea');
        checkbox.addEventListener('click', () => {
            if(checkbox.checked){
                spanNombre.style.textDecoration = "line-through";
                spanNombre.style.opacity = "0.5";
            } else {
                spanNombre.style.textDecoration = "none";
                spanNombre.style.opacity = "1";
            }
        })

        const spanNombre = document.createElement('span');
        spanNombre.textContent = nombre;
        spanNombre.classList.add('nombre-tarea');

        const spanFecha = document.createElement('span');
        spanFecha.textContent = fecha;
        spanFecha.classList.add('fecha-tarea');

        const papelera = document.createElement('img');
        papelera.src = "assets/icons/trash-negro.png";
        papelera.alt = "papelera";
        papelera.classList.add('papelera-tarea');

        papelera.addEventListener('click', () => {
            nuevo_li.remove();
        })

        nuevo_li.appendChild(checkbox);
        nuevo_li.appendChild(spanNombre);
        nuevo_li.appendChild(spanFecha);
        nuevo_li.appendChild(papelera);

        listaTareas.appendChild(nuevo_li);
        

        modalTarea.classList.add('modal-oculto');
    }
    else{
        alert('Debes rellenar los dos campos.');
    }
});

btnCancelarTarea.addEventListener('click', () => {
    modalTarea.classList.add('modal-oculto');
});

const btnNota = document.getElementById('btn-crearNota');
const modalNota = document.getElementById('modalNota');
const listaNotas = document.getElementById('listaNotas');
const btnAddNota = document.getElementById('btn-addNota');
const btnCancelarNota = document.getElementById('btn-cancelarNota');

btnNota.addEventListener('click', () => {
    modalNota.classList.remove('modal-oculto');
})

btnAddNota.addEventListener('click', () => {
    const nombre = document.getElementById('inputNota');
    if(nombre){
        nuevaNota = document.createElement('li');
        nuevaNota.classList.add('nota')

        const spanNombre = document.createElement('span');
        spanNombre.textContent = nombre.value;
        spanNombre.classList.add('nombreNota');

        const papelera = document.createElement('img');
        papelera.src = "assets/icons/trash-negro.png";
        papelera.alt = "papelera";
        papelera.classList.add('papelera-nota');

        papelera.addEventListener('click', () => {
            nuevaNota.remove();
        })

        nuevaNota.appendChild(spanNombre);
        nuevaNota.appendChild(papelera);

        listaNotas.appendChild(nuevaNota);

        
    }
    else{
        alert('Debes rellenar el nombre de la nota');
    }
    modalNota.classList.add('modal-oculto');
});

btnCancelarNota.addEventListener('click', () => {
    modalNota.classList.add('modal-oculto');
});
