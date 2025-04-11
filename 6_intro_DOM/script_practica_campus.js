/* 
Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional) 
*/

// Obtener referencias a los elementos del DOM
const commentForm = document.getElementById('form_comentario');
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombreInput = document.getElementById('nombre');
    const nombreText = nombreInput.value.trim();
    const commentInput = document.getElementById('comentario');
    const commentText = commentInput.value.trim();
    if (nombreText && commentText) {
        const fecha = new Date();
        const fechaTexto = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;
        const commentList = document.getElementById('lista_comentarios');
        const newComment = document.createElement('li');
        newComment.classList.add('list-group-item');
        newComment.innerHTML = `<strong>${nombreText}</strong>: ${commentText}. <i>(${fechaTexto})</i>`;
        commentList.appendChild(newComment);

        nombreInput.value = '';
        commentInput.value = '';
        nombreInput.focus(); 
    } else {
        alert('Por favor, verifica que todos los campos este llenos.'); // Alerta si el campo está vacío
    }
});