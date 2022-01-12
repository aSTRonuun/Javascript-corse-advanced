const nome = "Vitor";
const sobrenome = "Alves";
const idade = 21;
const peso = 63;
const altura = 1.75;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2021 - idade;

// console.log(nome, sobrenome, " tem ", idade, " anos, pesa ", peso, " kg");
// console.log("tem ", altura, " de altura, seu IMC é ", imc.toFixed(2));
// console.log("e nasceu em ", anoNascimento)

// Template String
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg,
tem ${altura} de altura, seu IMC é ${imc.toFixed(2)} 
e nasceu em ${anoNascimento}`);
