
let nota = 0;

// Verificar si la nota es válida
if (nota >= 0 && nota <= 100) {
    if (nota >= 90) {
        console.log(`Tu nota es ${nota}. ¡Excelente!`);
    } else if (nota >= 75) {
        console.log(`Tu nota es ${nota}. ¡Bien!`);
    } else if (nota >= 60) {
        console.log(`Tu nota es ${nota}. ¡Suficiente!`);
    } else {
        console.log(`Tu nota es ${nota}. No has aprobado.`);
    }
} else {
    console.log("La nota ingresada no es válida. Debe estar entre 0 y 100.");
}