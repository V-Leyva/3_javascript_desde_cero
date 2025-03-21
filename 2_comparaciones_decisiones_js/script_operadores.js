
let valorA = 10;
let valorB = 20;

// operador de concatenación (+)

// Operaciones basicas
console.log(valorA + " + " + valorB + " = " + (valorA + valorB));
console.log(valorA + " - " + valorB + " = " + (valorA - valorB));
console.log(valorA + " * " + valorB + " = " + (valorA * valorB));
console.log(valorA + " / " + valorB + " = " + (valorA / valorB));

// Operacion Modulo (residuo)
console.log(valorA + " % " + valorB + " = " + (valorA % valorB));

// Operadores conbinados (+=, -=, *=, /=, %=)
let resultado = 0;
resultado += valorA; // resultado = resultado + valorA
console.log("resultado += valorA: " + resultado);   // 10
resultado -= valorB; // resultado = resultado - valorB 
console.log("resultado -= valorB: " + resultado);   // -10
resultado *= valorA; // resultado = resultado * valorA 
console.log("resultado *= valorA: " + resultado);   // -100
resultado /= valorB; // resultado = resultado / valorB
console.log("resultado /= valorB: " + resultado);   // -5
resultado %= valorA; // resultado = resultado % valorA
console.log("resultado %= valorA: " + resultado);   // 0

// Operador incremento y decremento (++ y --)
let i = 0;
console.log("i: " + i); // 0
i++;
console.log("i: " + i); // 1
i--;
console.log("i: " + i); // 0

// Operadores de comparación (==, ===, !=, !==, >, <, >=, <=)
let valorC = 10;
let valorD = 20;

console.log(valorC + " ==  " + valorD + " : ", valorC == valorD);  // false
console.log(valorC + " === " + valorD + " : ", valorC === valorD); // false
console.log(valorC + " !=  " + valorD + " : ", valorC != valorD);  // true
console.log(valorC + " !== " + valorD + " : ", valorC !== valorD); // true
console.log(valorC + " >   " + valorD + " : ", valorC > valorD);   // false
console.log(valorC + " <   " + valorD + " : ", valorC < valorD);   // true
console.log(valorC + " >=  " + valorD + " : ", valorC >= valorD);  // false
console.log(valorC + " <=  " + valorD + " : ", valorC <= valorD);  // true

// Operadores lógicos (&&, ||, !)
let verdadero = true;
let falso = false;

// AND lógico (&&) -> &&: Solo devuelve true si ambas condiciones son verdaderas.
console.log("true && true: ", verdadero && verdadero);   // true
console.log("true && false:", verdadero && falso);  // false

// OR lógico (||) -> ||: Devuelve true si al menos una condición es verdadera.
console.log("true || false:", verdadero || falso);  // true
console.log("false || false:", falso || falso); // false

// NOT lógico (!) -> !: Invierte el valor lógico de la condición.
console.log("!true: ", !verdadero);  // false
console.log("!false:", !falso);  // true

// Combinación de operadores
console.log("(true && false) || true:", (verdadero && falso) || verdadero); // true
console.log("!(true && true):", !(verdadero && verdadero));                 // false
