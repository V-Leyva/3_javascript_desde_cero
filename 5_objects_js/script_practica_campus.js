// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

function libro(titulo, autor, anio, estado, capitulos = []) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado; // 'disponible' o 'prestado'
    this.capitulos = capitulos;
    
    this.imprimirInformacion = function() {
        info_libro = "Información del libro: \n" +
            "Título: " + this.titulo + "\n" +
            "Autor: " + this.autor + "\n" +
            "Año de publicación: " + this.anio + "\n" +
            "Estado: " + this.estado + "\n" +
            "Capítulos:\n";
        if (this.capitulos.length > 0) {
            for (let i = 0; i < this.capitulos.length; i++) {
                info_libro += "  - " + this.capitulos[i] + "\n";
            }
        } else {
            info_libro += "  ** No hay capítulos disponibles.\n";
        }
        console.log(info_libro);
    };
    
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
    };
    
    this.eliminarCapitulo = function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index > -1) {
            this.capitulos.splice(index, 1);
        } else {
            console.log("El capítulo no existe.");
        }
    };
}

let libro_1 = new libro("El gran Gatsby", "F. Scott Fitzgerald", 1925, "disponible", []);
// Imprimir información básica del libro_1
console.log("Información del libro_1:");
libro_1.imprimirInformacion();

// Agregar capítulos al libro_1
libro_1.agregarCapitulo("Capítulo 1: En el camino a West Egg");
libro_1.agregarCapitulo("Capítulo 2: La fiesta en la mansión de Gatsby");
libro_1.agregarCapitulo("Capítulo 3: El misterio de Gatsby");

// Imprimir información del libro_1
console.log("Información del libro_1 con capitulos agregados:");
libro_1.imprimirInformacion();

// Eliminar un capítulo del libro_1
libro_1.eliminarCapitulo("Capítulo 2: La fiesta en la mansión de Gatsby");
// Imprimir información del libro_1 nuevamente

console.log("Información del libro_1 con capitulos eliminados:");
libro_1.imprimirInformacion();


/*
    Ejercicios complementarios:

    Fácil
    - Crear un objeto llamado ListaLibros que permita almacenar dentro de él más de un Libro.
    - Agregar un método a ListaLibros para agregar un nuevo libro.
    - Agregar un método a ListaLibros para verificar si hay un libro a partir de un nombre especificado.

    Medio
    - Agregar un método a ListaLibros que regrese un arreglo de libros que contenga todos los libros de un autor en específico.
    - Crear un método que permita mostrar todos los libros en una ListaLibros.

    Difícil
    - Agregar un método a ListaLibros para eliminar un libro a partir de su nombre.

*/

function libreria(){
    this.libros = []; // Array para almacenar los libros
    
    this.agregarLibro = function(titulo, autor, anio, estado, capitulos = []) {
        this.libros.push(new libro(titulo, autor, anio, estado, capitulos));
    };

    this.buscarLibro = function(titulo) {
        const libroEncontrado = this.libros.find(libro => libro.titulo === titulo);
        if (libroEncontrado) {
            console.log("Libro encontrado: ");
            libroEncontrado.imprimirInformacion();
        } else {
            console.log("El libro no existe en la librería.");
        }
    }

    this.buscarLibrosPorAutor = function(autor) {
        const librosPorAutor = this.libros.filter(libro => libro.autor === autor);
        if (librosPorAutor.length > 0) {
            console.log("Libros del autor " + autor + ":");
            for (let i = 0; i < librosPorAutor.length; i++) {
                console.log("  - " + librosPorAutor[i].titulo);
            }
        } else {
            console.log("No se encontraron libros del autor " + autor + ".");
        }
    }
    
    this.listarLibros = function() {
        if (this.libros.length > 0) {
            console.log("Libros en la librería:");
            for (let i = 0; i < this.libros.length; i++) {
                console.log("  - " + this.libros[i].titulo + " por " + this.libros[i].autor);
            }
        }
        else {
            console.log(" ** No hay libros en la librería.");
        }
    };
    
    this.eliminarLibro = function(titulo) {
        const index = this.libros.findIndex(libro => libro.titulo === titulo);
        if (index > -1) {
            this.libros.splice(index, 1);
        } else {
            console.log("El libro no existe en la librería.");
        }
    };
}

libreria_1 = new libreria();

// Listar libros en la librería
libreria_1.listarLibros();

// Agregar libros a la librería
libreria_1.agregarLibro("El gran Gatsby", "F. Scott Fitzgerald", 1925, "disponible", []);
libreria_1.agregarLibro("Cien años de soledad", "Gabriel García Márquez", 1967, "prestado", []);
libreria_1.agregarLibro("1984", "George Orwell", 1949, "disponible", []);
libreria_1.agregarLibro("El principito", "Antoine de Saint-Exupéry", 1943, "disponible", []);
libreria_1.agregarLibro("Crónica de una muerte anunciada", "F. Scott Fitzgerald", 1981, "prestado", []);

// Listar libros en la librería
libreria_1.listarLibros();

// Buscar un libro en la librería
libreria_1.buscarLibro("Cien años de soledad");

// Buscar un libro que no existe en la librería
libreria_1.buscarLibro("El túnel");

// Buscar libros por autor
libreria_1.buscarLibrosPorAutor("F. Scott Fitzgerald");

// Buscar libros por autor que no existen en la librería
libreria_1.buscarLibrosPorAutor("Luis Sepúlveda");

// Eliminar un libro de la librería
libreria_1.eliminarLibro("1984");
// Listar libros en la librería después de eliminar un libro
libreria_1.listarLibros();