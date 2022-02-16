const titulo = document.querySelector(".titulo");

const date = new Date();

function getDayText(num) {
    let daysText = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo"];
    return daysText[num];
}

function getMonthText(num) {
    let monthsText = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

    return monthsText[num];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const dayText = getDayText(date.getDay());
    const monthText = getMonthText(date.getMonth());

    return (
        `${dayText}, ${date.getDate()} de ${monthText} de ${date.getFullYear()}` +
        ` ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`
    )
}

titulo.innerHTML = formatDate(date);