/**
 * Operadores de comparação
 *  > maior que
 *  < menor que
 *  >= maior que ou igual a
 *  <= menor que ou igual a
 *  == igual a (valor) * Não é recomendado
 *  === igual a (valor e tipo)
 *  != diferent (valor) * Não é recomendado
 *  !== diferent estritamente (valor e tipo)
 */


const num1 = 10;
const num2 = "10";
// Javascript faz a type conversion automaticamente e return true
const comp = num1 == num2;

// Operador === compara o valor e o tipo (mais seguro)
const comp2 = num1 === num2;

// Retorna falso pois acontece o type conversion
const comp3 = num1 != num2

// Retorna true pois além de verificar o valor, verifica-se o tipo
const comp4 = num1 !== num2

console.log(comp);
console.log(comp2);
console.log(comp3);
console.log(comp4);