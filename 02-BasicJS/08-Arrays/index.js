const alunos = ['João', 'Maria', 'Pedro'];

// push() - Adiciona um elemento no final do array.
alunos.push('Fernando');
console.log(alunos);

// unshift() - Adiciona um elemento no início do array.
alunos.unshift('Vitor');
console.log(alunos);

// pop() - Remove e retorna o último elemento do array.
const removidoFinal = alunos.pop();
console.log(removidoFinal);
console.log(alunos);

// shift() - Remove e retorna o primeiro elemento do array.
const removidoComeco = alunos.shift();
console.log(removidoComeco);
console.log(alunos);

// slice() - Cria um novo array a partir de um intervalo de um array existente.
const subArray = alunos.slice(0, 2);
console.log(subArray);

// instancepof() - Retorna se um objeto pertence a uma determinada classe.
console.log(typeof alunos);
console.log(alunos instanceof Array);
