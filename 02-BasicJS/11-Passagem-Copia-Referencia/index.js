/**
 * Dados primitivos são passados por copia (imutáveis)
 *  - string, number, boolean, null, undefined, null (bigint, symbol)
 * 
 * Dados passados por Referência (mutáveis)
 *  - object, array, function
 */

// Passagem por valor

let a = 1;
let b = a;

console.log(a, b);

b = 2;

console.log(a, b);

// Passagem por referência

let c = [1, 2, 3];
let d = c;

console.log(c, d);

d.push(4);
// Operador spread (...) copia os dados de um array
let e = [...d];
e.push(5);

console.log(c, d, e);