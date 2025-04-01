let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];


let citricos = 0;
let pomaceas = 0;
let tropicales = 0;
let drupas = 0;
let cucurbitaceas = 0;

for (let i = 0; i < frutasConTipo.length; i++) {
    switch (frutasConTipo[i].tipo) {
        case "Cítrico":
            citricos++;
            break;
        case "Pomácea":
            pomaceas++;
            break;
        case "Tropical":
            tropicales++;
            break;
        case "Drupa":
            drupas++;
            break;
        case "Cucurbitácea":
            cucurbitaceas++;
            break;
    }
}

console.log(`Cítricos: ${citricos}`);
console.log(`Pomáceas: ${pomaceas}`);
console.log(`Tropicales: ${tropicales}`);
console.log(`Drupas: ${drupas}`);
console.log(`Cucurbitáceas: ${cucurbitaceas}`);