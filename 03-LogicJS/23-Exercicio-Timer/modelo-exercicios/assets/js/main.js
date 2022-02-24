function galactTime() {
    const relogio = document.querySelector('.relogio');

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        })
    }

    let seconds = 0;
    let timer;

    function initialRelogio() {
    timer = setInterval(function() {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000) 
    }

    document.addEventListener("click", function(e) {
        const element = e.target;

        if(element.classList.contains("start")) {
            relogio.classList.remove("stoped");
            clearInterval(timer);
            initialRelogio();
        }

        if(element.classList.contains("stop")) {
            relogio.classList.add("stoped");
            clearInterval(timer);    
        }

        if(element.classList.contains("reset")) {
            relogio.classList.remove("stoped");	
            clearInterval(timer);
            seconds = 0;
            relogio.innerHTML = "00:00:00";    
        }
    })
}

galactTime();