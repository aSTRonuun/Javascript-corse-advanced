// Declaracao classica de funcao - Hosting
hello();

function hello() {
    console.log("Hello Word!");
}

// First-class objects (Objetos de primeira classe)
// Function expression - Funcoes podem ser considerar dados
const showDado = function() {
    console.log("Sou um dadooooo.");
}

function executeFunction(funcao) {
    funcao();
}

executeFunction(showDado);

// Arrow function
const functionArrow = () => {
    console.log("Sou uma arrow function");
};

functionArrow();

// Dentro de um objeto
const objt = {
    speak() {
        console.log("I speak inglish");
    }
};

objt.speak();