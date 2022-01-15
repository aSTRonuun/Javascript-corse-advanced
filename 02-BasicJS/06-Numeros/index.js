//toString() - Converte um número para string.
let num1 = 1500;
console.log(num1.toString());

//toString(2) - Converte um número para string em base 2.
console.log(num1.toString(2));

//toFixed() - Converte um número para string com um número de casas decimais espesificado.
let num = 10.3383823;
console.log(num.toFixed(2));

//Imprecição de números
let num2 = 0.7;
let num3 = 0.1;
let result = num2 + num3;

result = Number(result.toFixed(2)); //Number() - Converte uma string para número.

console.log(result);

