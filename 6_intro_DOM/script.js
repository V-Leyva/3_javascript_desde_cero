
function fn_add_tarea(){
    let input_tarea = document.getElementById("input_nueva_tarea");
    if (input_tarea.value == "") {
        alert("Escribe una tarea");
        return;
    }
    let lista_tareas = document.getElementById("lista_tareas");
    let new_li = document.createElement("li");
    new_li.innerText = input_tarea.value;
    lista_tareas.appendChild(new_li);
    input_tarea.value = ""; // Limpiar el input
    input_tarea.focus(); // Enfocar el input

    let mensajeErrorH2 = document.getElementById("mensajeErrorH2");
    document.body.removeChild(mensajeErrorH2); // Eliminar el mensaje de error
}

let btn_add_tarea = document.getElementById("btn_add_tarea");
btn_add_tarea.addEventListener("click", fn_add_tarea);