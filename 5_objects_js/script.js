
let mascota1 = {
    nombre: "Firulais",
    tipo: "perro",
    edad: 5,
    raza: "labrador",
    peso: 20,
    humano: {
        nombre: "Juan",
        edad: 30,
        sexo: "masculino",
        telefono: "123456789",
        direccion: {
            calle: "Calle Falsa",
            numero: 123,
            ciudad: "Ciudad Falsa",
            pais: "País Falso"
        }
    }
} 

// Accediendo a las propiedades del objeto mascota1
console.log(mascota1.nombre); // Firulais
console.log(mascota1['tipo']); // perro
console.log(mascota1.humano.nombre); // Juan

// Modificando propiedades del objeto mascota1
console.log('La edad de la mascota es: ' + mascota1.edad); // 5
mascota1.edad = 6;
console.log('Ahora la edad de la mascota es: ' + mascota1.edad); // 6

// Agregando una nueva propiedad al objeto mascota1
mascota1.color = "marrón";
console.log(mascota1.color); // marrón

// Eliminando una propiedad del objeto mascota1
delete mascota1.peso;
console.log(mascota1.peso); // undefined

function Mascota(nombre, tipo, edad, raza, peso, humano) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
    this.raza = raza;
    this.peso = peso;
    this.humano = this.humano;
}

function Humano(nombre, edad, sexo, telefono, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.telefono = telefono;
    this.direccion = direccion;
    this.saludar = function() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
}

function Direccion(calle, numero, ciudad, pais) {
    this.calle = calle;
    this.numero = numero;
    this.ciudad = ciudad;
    this.pais = pais;
}

let mascota2 = new Mascota("Miau", "gato", 3, "siames", 5, new Humano("Ana", 25, "femenino", "987654321", new Direccion("Calle Verdadera", 456, "Ciudad Verdadera", "País Verdadero")));
console.log(mascota2.nombre); // Miau

let humano2 = new Humano("Ana", 25, "femenino", "987654321", new Direccion("Calle Verdadera", 456, "Ciudad Verdadera", "País Verdadero"));
humano2.saludar(); // Hola, soy Ana y tengo 25 años.

// Destructuración de objetos, nos permite extraer propiedades de un objeto y asignarlas a variables
let { nombre, edad, tipo } = mascota1;
console.log(nombre); // Firulais
console.log(edad); // 6
console.log(tipo); // perro


// Destructuración de objetos anidados
let { humano: { nombre: nombreHumano, edad: edadHumano } } = mascota1;
console.log(nombreHumano); // Juan
console.log(edadHumano); // 30

// Destructuración de objetos con alias
let { nombre: nombreMascota, edad: edadMascota } = mascota1;
console.log(nombreMascota); // Firulais 
console.log(edadMascota); // 6

// Destructuración de objetos con valores por defecto
let { nombre: nombreMascota2, edad: edadMascota2 = 0 } = mascota1;
console.log(nombreMascota2); // Firulais
console.log(edadMascota2); // 6

// For... in para recorrer un objeto
for (let propiedad in mascota1) {
    console.log(propiedad + ": " + mascota1[propiedad]);
}

for (let propiedad in humano2) {
    console.log(propiedad + ": " + humano2[propiedad]);
}

// For... of para recorrer un array de objetos
let mascotas = [mascota1, mascota2];
for (let mascota of mascotas) {
    console.log(mascota.nombre + " es un " + mascota.tipo);
}

// ForEach para recorrer un array de objetos
mascotas.forEach(mascota => {
    console.log(mascota.nombre + " es un " + mascota.tipo);
});