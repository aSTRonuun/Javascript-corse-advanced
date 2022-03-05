// Closure - Habilidade que a funcao tem de acessar seu escopo.
function returnFunction(name) {
    return function() {
        return name;
    };
}

const funcao = returnFunction("Vitor");
const funcao2 = returnFunction("Alves");

console.log(funcao());
console.log(funcao2());