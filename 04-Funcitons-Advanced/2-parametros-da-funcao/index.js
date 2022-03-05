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

// Argumentos via desistruturacao de objetos
function funcao({name, lastname, age}) {
    console.log(name, lastname, age);
}

let obj = { name: "Vitor", lastname: "Alves", age: 21};
funcao(obj);

// Usando o rest operator como parametro de funcoes (o rest operator precisa obrigatoriamente ser o ultimo parametro)
function conta(operator, accumulator, ...numbers) {
    for(let number of numbers) {
        if(operator === "+") accumulator += number;
        if(operator === "-") accumulator -= number;
        if(operator === "/") accumulator /= number;
        if(operator === "*") accumulator *= number;
    }
    console.log(accumulator);
}

conta("+", 0, 2, 4, 6, 8, 10);

