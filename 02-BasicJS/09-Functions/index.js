// Funcao com valores default
function soma(x = 0, y = 0) {
    const result = x + y;
    return result;
}

// Funcao anonima
const raiz = function (n) {
    return n ** 0.5;
};

// Funcao arrow curta
const quadrado = n => n ** 2;

// Funcao arrow extendida
const potencia = (base, expoente) => {
    return base ** expoente;
}

const result = soma(2, 3);
console.log(result);

console.log(raiz(9));

console.log(quadrado(10));

console.log(potencia(5, 3));