/**
 * && -> false && true retorna false (valor e tipo)
 * || -> false || true returna true (valor e tipo)
 * 
 * FALSY VALUES:
 * - false
 * - 0
 * = '' "" ``
 * - null / undefined
 * - Nan 
 */

const corUsuario = null;
// Retorna o primeiro valor verdadeiro ou o ultimo valor
const corPadrao = corUsuario || 'preto';
// Retorna o primeiro valor falso ou o ultimo valor
const corPadrao2 = corUsuario && 'preto';

console.log(corPadrao);
console.log(corPadrao2);

const a = 0;
const b = null;
const c = 'false'; 
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // c é o valor retornado pois é verdadeiro
console.log(a && b && c && d && e); // 0 é o valor retornado pois é falso