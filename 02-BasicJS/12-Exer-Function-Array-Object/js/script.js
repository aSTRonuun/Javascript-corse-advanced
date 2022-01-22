function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log("Enviado");
    // };


    // Funcao para executar quando o evento submit for disparado
    function recebeEventoForm(evento) {
        //Funcao para previnir a execacao padrão do evento
        evento.preventDefault();
        
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    }

    //Funcao para escultar eventos do frontend
    form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();