let varA = "A";
let varB = "B";
let varC = "C";
let aux;

// Maneira 1
// aux = varA;
// varA = varB;
// varB = varC;
// varC = aux;

// Maneira 2
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);