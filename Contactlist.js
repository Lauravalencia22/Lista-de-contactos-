// Lista de contactos predefinidos
let contactos = [
    "Laura Valencia",
    "Isabella Moreno",
    "Juan Silva",
    "Jacobo Ortega",
    "Alejandro Morales",
    "Yomaira Arenas"
];

// Función para agregar un nuevo contacto
function agregarContacto() {
    let nuevoContacto = document.getElementById("new-contact").value;
    contactos.push(nuevoContacto);
    document.getElementById("new-contact").value = "";
}

// Función para eliminar un contacto existente
function eliminarContacto() {
    let contactoAEliminar = document.getElementById("eliminar-contacto").value;
    let index = contactos.indexOf(contactoAEliminar);
    if (index !== -1) {
        contactos.splice(index, 1);
    }
    document.getElementById("eliminar-contacto").value = "";
}

// Función para mostrar los contactos en la consola
function mostrarContactos() {
    console.log(contactos);
}

// Ejemplo de cómo agregar, eliminar y mostrar contactos
agregarContacto(); // Agregar un nuevo contacto
eliminarContacto(); // Eliminar un contacto existente
mostrarContactos(); // Mostrar los contactos en la consola