alert("Hola, vamos a realizarte un pequeño cuestionario!.");

let nombre = prompt("¿Cual es tu nombre?"); //Victor
let nacimiento = prompt("¿En que año naciste?"); //2000
let ciudad = prompt("¿En que ciudad vives?"); //Bogota
let ocupacion = prompt("¿Cual es tu ocupacion?"); //Estudiante
let preferencia = prompt("¿Qué prefieres?\n1. Leer libros\n2. Ver películas\n3. Hacer deporte\n4. Escuchar música\nEscribe el número de tu opción:"); //2
let telefono = prompt("¿Cual es tu número de telefono?"); //3001234567
let correo = prompt("¿Cual es tu correo electrónico?"); //my_email@mail.com
let color = prompt("¿Cuál es tu color favorito?"); //Verde
let comida = prompt("¿Cuál es tu comida favorita?"); //Pizza
let social = prompt("¿Qué reed social prefieres?\n1. facebook\n2. Instagram\n3. TikTok\n4. X\nEscribe el número de tu opción:"); //2

let informacion = "Nombre: " + nombre + "\nAño de nacimiento: " + nacimiento + "\nCiudad: " + ciudad + "\nOcupación: " + ocupacion + "\nPreferencia: " + preferencia + "\nTeléfono: " + telefono + "\nCorreo: " + correo + "\nColor favorito: " + color + "\nComida favorita: " + comida + "\nRed social preferida: " + social;

// Confirmar si los datos son correctos
let confirmacion = confirm(informacion + "\n¿Son correctos los datos ingresados?");
if (confirmacion) {
    alert("¡Gracias! Los datos han sido registrados.");
} else {
    alert("Por favor, recarga la pagina y vuelve a ingresar los datos.");
}

