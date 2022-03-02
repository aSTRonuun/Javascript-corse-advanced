// Quando se declara uma funcao com o palavra function, pode-se usar o atributo arguments que
// sustenta todos os argumentos passados quando chamou a funcao.

function sumTotal(a, b, c) {
    let total = 0;
    for(let argument of arguments) {
        total += argument;
    }
    console.log(total, a, b, c);
}

sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Funciona tanto para mais parametros passados, quanto para menos parametros passados
sumTotal(1, 2);

// Pode-se passar valores padroes para os parametros caso o usuario nao passe os valores
function sum(a, b = 2, c = 4) {
    console.log(a + b + c);
}

sum(10);

