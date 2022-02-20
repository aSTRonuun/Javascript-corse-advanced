const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3, ...restNumbers] = numbers;


console.log(num1, num2, num3);
console.log(restNumbers);