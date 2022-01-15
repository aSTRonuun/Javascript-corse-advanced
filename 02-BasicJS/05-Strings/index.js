let string = "Meu nome é Vitor";

//charAt() - Retorna o caractere na posição especificada.
console.log(string.charAt(0));

//Concat() - Concatena duas ou mais strings.
console.log(string.concat(" e eu tenho 20 anos."));

//indexOf() - Retorna a posiçao da primeira ocorrência de uma string.
console.log(string.indexOf("nome"));

//lastIndexOf() - Retornar a posição da última ocorrência de uma string.
console.log(string.lastIndexOf("o"));

//match() - Retorna um array com todas as ocorrências de uma expressão regular ou uma string.
console.log(string.match(/[a-z]/g));

//search() - Retornar a posição da primeira ocorrência de uma expressão regular ou uma string.
console.log(string.search(/[a-z]/g));

//replase() - Substitui todas as ocorrências de uma expressão regular ou uma string por outra string.
console.log(string.replace(/[a-z]/g, "X"));

//length - Retonar o tamanho de uma string.
console.log(string.length);

//slice() - Retorna uma parte de uma string.
console.log(string.slice(11, 16));

//split() - Divide uma string em um array de strings.
console.log(string.split(" "));

//toUpperCase() - Converte uma string para maiúsculas.
console.log(string.toUpperCase());

//toLowerCase() - Converte uma string para minúsculas.
console.log(string.toLowerCase());