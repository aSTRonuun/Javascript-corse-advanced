const verdadeiro = true;

// Let tem escopo de bloco
// Var tem escopo de função

let firtName = "Vitor";
var lastName = "Alves";
console.log(firtName, lastName);


if(verdadeiro) {
    let firtName = "Manoel"; // Criando
    var lastName = "Silva" // Redeclarando
    console.log(firtName, lastName);

    if(verdadeiro) {
        let firtName = "Pedro"; // Criando
        var lastName = "Almeida" // Redeclarando
        console.log(firtName, lastName);
    }
}

console.log(firtName, lastName);

// Hoisting - O javaScript faz o "Elevação" das variáveis para o topo do código (var e function)

console.log(nome);

var nome;

// O hoisting não se aplica ao let
// Error: nomeLet is not defined
console.log(nomeLet);

let nomeLet = "Vitor";	
