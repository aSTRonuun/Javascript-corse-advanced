// Uma funcao pode retornar muitas coisas
// exemp: literais, objetos, funcoes

// Funcao que retorna outra funcao
function createMultiplacador(multiplicator) {
    return function(n) {
        return n * multiplicator;
    };
}

const duplica = createMultiplacador(2);
const triplica = createMultiplacador(3);
const quadriplica = createMultiplacador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5))
