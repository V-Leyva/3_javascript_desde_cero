
document.getElementById("length-slider").addEventListener("input", (element)=> {
    document.getElementById("length-value").textContent = element.target.value;
});

document.getElementById("btn-generate-password").addEventListener("click", ()=> {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`nvl-${i}`).classList.remove("active");
    }

    const length = document.getElementById("length-slider").value;
    const includeUpper = document.getElementById("upper").checked;
    const includeLower = document.getElementById("lower").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let password = "";
    let charset = "";
    let count = 0;
    if (includeUpper){
        const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        password += charsetUpper.charAt(Math.floor(Math.random() * charsetUpper.length));
        charset += charsetUpper;
        count++;
    }
    if (includeLower){
        const charsetLower = "abcdefghijklmnopqrstuvwxyz";
        password += charsetLower.charAt(Math.floor(Math.random() *  charsetLower.length));
        charset += charsetLower;
        count++;
    }
    if (includeNumbers){
        const charsetNumbers = "0123456789";
        password += charsetNumbers.charAt(Math.floor(Math.random() *  charsetNumbers.length));
        charset += charsetNumbers;
        count++;
    }
    if (includeSymbols){
        const charsetSymbols = "!@#$%^&*()_+~";
        password += charsetSymbols.charAt(Math.floor(Math.random() *  charsetSymbols.length));
        charset += charsetSymbols;
        count++;
    }
    
    for (let i = count; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    const arr = password.split('');
    // Mezclar los caracteres
    const cryptoArray = new Uint32Array(arr.length);
    window.crypto.getRandomValues(cryptoArray);

    for (let i = arr.length - 1; i > 0; i--) {
        const j = cryptoArray[i] % (i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    password = arr.join('');

    document.getElementById("password").textContent = password;
    const pswSeguridad = evaluarSeguridad(password);
    document.getElementById("nivel").textContent = pswSeguridad.nivel;
    for (let i = 1; i <= pswSeguridad.barras; i++) {
        document.getElementById(`nvl-${i}`).classList.add("active");
    }
});

document.getElementById("btn-copy-password").addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById("password").textContent).then(() => alert("Contraseña Copiada!"));
});


function evaluarSeguridad(password) {
    let score = 0;

    const tieneMayusculas = /[A-Z]/.test(password);
    const tieneMinusculas = /[a-z]/.test(password);
    const tieneNumeros = /[0-9]/.test(password);
    const tieneSimbolos = /[^A-Za-z0-9]/.test(password);
    const longitud = password.length;

    if (tieneMayusculas) score++;
    if (tieneMinusculas) score++;
    if (tieneNumeros) score++;
    if (tieneSimbolos) score++;
    if (longitud >= 12) score++;

    // Penalización si la contraseña es muy corta
    if (longitud < 8) {
        score = Math.min(score, 1);
    }

    // Mapeo visual del nivel (0 a 4 barras)
    const niveles = ['No cuenta como contraseña', 'Muy débil', 'Débil', 'Media', 'Buena', 'Fuerte'];
    const barras = ['0', '1', '2', '3', '4', '5'];

    return {
        nivel: niveles[score],
        barras: barras[score],
        puntaje: score
    };
}