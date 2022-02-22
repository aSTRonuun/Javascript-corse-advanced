const name = "Vitor Alves";

for (let index in name) {
    console.log(index);
}

// When we use for..of loop, it will return the value of the object.
for (let value of name) {
    console.log(value);
}

// For classic - Geralmente com iteráveis (array, string)
// For in - Retorna o índice ou chave do objeto (string, array ou objetos)
// For of - Retorna o valor do objeto (iteráveis, string, array)