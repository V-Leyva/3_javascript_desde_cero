let contador = 1;

while (contador <= 10) {
    console.log('while: ' + contador);
    contador++;
}

let contador_2 = 1;
do{
    console.log('do-while: ' + contador_2);
    contador_2++;
}while(contador_2 <= 10);

for (let contador_3 = 1; contador_3 <= 10; contador_3++) {
    console.log('for: ' + contador_3);
}

console.log('--------------------------------')
// Declarar un arreglo de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el arreglo y verificar si cada número es par o impar
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} es par.`);
    } else {
        console.log(`${numeros[i]} es impar.`);
    }
}