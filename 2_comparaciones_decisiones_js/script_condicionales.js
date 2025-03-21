
// Estructura de control if 
let num = 10;
if (num > 0) {
    console.log(`${num} es mayor que 0`);
}

// Estructura if anidada
let num1 = 10;
if (num1 > 0) {
    console.log(`${num1} es mayor que 0`);
    if (num1 == 10) {
        console.log(`${num1} es igual a 10`);
    }
}

// Estructura de control if-else
let num2 = -10;
if (num2 > 0) {
    console.log(`${num2} es mayor que 0`);
} else {
    console.log(`${num2} es menor o igual que 0`);
}

// Estructura de control if-else if-else
let num3 = 0;
if (num3 > 0) {
    console.log(`${num3} es mayor que 0`);
} else if (num3 < 0) {
    console.log(`${num3} es menor que 0`);
} else {
    console.log(`${num3} es igual a 0`);
}