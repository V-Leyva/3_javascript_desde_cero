/* 
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. 
*/

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(`${i + 1}. ${librosLeidos[i]}`);
    }
}

// Ejemplo de uso
agregarLibro("El Principito");
agregarLibro("Cien años de soledad");   
agregarLibro("1984");
agregarLibro("El túnel");


mostrarLibrosLeidos();
console.log("-------Agregamos más libros-------");

agregarLibro("Rayuela");
agregarLibro("El Aleph");
agregarLibro("Crónica de una muerte anunciada");
agregarLibro("Ficciones");
agregarLibro("El amor en los tiempos del cólera");

mostrarLibrosLeidos();
