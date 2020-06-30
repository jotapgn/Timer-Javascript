const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function setTimeOnSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = setTimeOnSeconds(segundos);
    }, 1000);
}
document.addEventListener('click', function (event) {
    const el = event.target;

    if (el.classList.contains('iniciar')){
        clearInterval(timer);
        iniciaRelogio()
        relogio.style.color = "#000000"
    };
    if (el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.style.color = "#f50404ea";
    };
    if (el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0
        relogio.style.color = "#000000"    
    };
});
