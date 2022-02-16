const titulo = document.querySelector(".titulo");

const date = new Date();

function getDayText(num) {
    let dayText;

    switch(num) {
        case 0:
            dayText = "Domingo";
            return dayText;
        case 1:
            dayText = "Segunda-Feira";
            return dayText;
        case 2:
            dayText = "Terça-Feira";
            return dayText;
        case 3:
            dayText = "Quarta-Feira";
            return dayText;
        case 4:
            dayText = "Quinta-Feira";
            return dayText;
        case 5:
            dayText = "Sexta-Feira";
            return dayText;
        case 6:
            dayText = "Sabádo-Feira";
            return dayText;
        default:
            dayText = "";
            return dayText;
    }
}

function getMonthText(num) {
    let monthText;

    switch(num) {
        case 1:
            monthText = "Janeiro";
            return monthText;
        case 2:
            monthText = "Fevereiro";
            return monthText;
        case 3:
            monthText = "Março";
            return monthText;
        case 4:
            monthText = "Abril";
            return monthText;
        case 5:
            monthText = "Maio";
            return monthText;
        case 6:
            monthText = "Junho";
            return monthText;
        case 7:
            monthText = "Julho";
            return monthText;
        case 8:
            monthText = "Agosto";
            return monthText;
        case 9:
            monthText = "Setembro";
            return monthText;
        case 10:
            monthText = "Outubro";
            return monthText;
        case 11:
            monthText = "Novembro";
            return monthText;
        case 12:
            monthText = "Dezembro";
            return monthText;
        default:
            monthText = "";
            return monthText;
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const dayText = getDayText(date.getDay());
    const monthText = getMonthText(date.getMonth() + 1);

    return (
        `${dayText}, ${date.getDate()} de ${monthText} de ${date.getFullYear()}` +
        ` ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`
    )
}

titulo.innerHTML = formatDate(date);