const data = new Date('1985-08-21 00:00:00');
const diaSemana = data.getDay();

function getDayWeekText(dayWeek) {
    let dayWeekText;

    switch(dayWeek) {
        case 0:
            dayWeekText = "Domingo";
            return dayWeekText;
        case 1:
            dayWeekText = "Segunda-Feira";
            return dayWeekText;
        case 2:
            dayWeekText = "Terça-Feira";
            return dayWeekText;
        case 3:
            dayWeekText = "Quarta-Feira";
            return dayWeekText;
        case 4:
            dayWeekText = "Quinta-Feira";
            return dayWeekText;
        case 5:
            dayWeekText = "Sexta-Feira";
            return dayWeekText;
        case 6:
            dayWeekText = "Sábado";
            return dayWeekText;
        default:
            dayWeekText = "";
            return dayWeekText;
    }
}

console.log(getDayWeekText(diaSemana));