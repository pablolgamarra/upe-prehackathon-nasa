import data from '../../backend/projects.json';

console.log(data);
// Escucha el evento de envío del formulario
document.getElementById('createProjectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener valores del formulario
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Crear un objeto de proyecto
    const project = {
        title: title,
        description: description,
        createdAt: new Date().toISOString()
    };

    // Obtener proyectos guardados en localStorage
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Añadir el nuevo proyecto
    projects.push(project);

    // Guardar los proyectos actualizados en localStorage
    localStorage.setItem('projects', JSON.stringify(projects));

    // Limpiar el formulario
    document.getElementById('createProjectForm').reset();

    // Redirigir a la página de Mis Proyectos
    window.location.href = 'projectList.html';
});