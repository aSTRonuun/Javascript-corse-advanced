const number = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = number;
texto.innerHTML = `<p>Raiz quadrada: ${number ** 0.5}</p>`;
texto.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(number)}</p>`;
texto.innerHTML += `<p>Arrendondado para baixo: ${Math.floor(number)}</p>`;
texto.innerHTML += `<p>Arrendondado para cima: ${Math.ceil(number)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;