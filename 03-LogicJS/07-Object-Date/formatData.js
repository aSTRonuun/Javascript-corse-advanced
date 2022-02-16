function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const day = zeroAEsquerda(data.getDate());
    const month = zeroAEsquerda(data.getMonth());
    const year = zeroAEsquerda(data.getFullYear());
    const hour = zeroAEsquerda(data.getHours());
    const minutes = zeroAEsquerda(data.getMinutes());
    const seconds = zeroAEsquerda(data.getSeconds());

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(dataBrasil);