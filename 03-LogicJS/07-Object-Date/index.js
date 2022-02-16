// const data = new Date(0); // Timestamp unix - 01/01/1970
// const data = new Date(2019, 3) ano, mes, dia, hora, minutos, segundos, milisegundos

const data = new Date("2022-02-15 11:44:00");
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1);
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia da semana", data.getDay());

console.log(data.toString());

