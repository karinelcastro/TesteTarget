function inverter(entrada) {
    let invertido = '';

    for (let i = entrada.length - 1; i >= 0; i--) {
        invertido += entrada[i];
    }

    return invertido;
}

const string = "Hello, world!";
const stringInvertida = inverter(string);
console.log("String original:", string);
console.log("String invertida:", stringInvertida);
