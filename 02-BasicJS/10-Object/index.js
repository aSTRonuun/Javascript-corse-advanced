const pessoa = {
    nome: "Vitor",
    sobrenome: "Alves",
    idade: 23,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementarIdade() {
        this.idade++;
    }
};

// Function factory of Object

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa2 = criaPessoa("Diego", "Magalhaes", 21);
const pessoa3 = criaPessoa("João", "Silva", 25);

console.log(pessoa);
console.log(pessoa2);
console.log(pessoa3);

pessoa.fala();
pessoa.incrementarIdade();
pessoa.fala();