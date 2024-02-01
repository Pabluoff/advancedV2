let entryCount = 0;
let isExecutingIA = false;
let maxEntryCount = getRandomInt(40, 98);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function incrementEntryCount() {
    const increment = getRandomInt(1, 3);
    entryCount += increment;
    if (entryCount > maxEntryCount) {
        entryCount = maxEntryCount;
    }
    document.getElementById('Countpeople').textContent = `${entryCount} PESSOAS FIZERAM ENTRADA`;
}


function simularAumentoDePessoas() {
    if (!isExecutingIA) {
        incrementEntryCount();
    }
}

setInterval(simularAumentoDePessoas, 5000);

function gerarPadraoAleatorio(executandoIA) {
    const totalElementos = 25;

    const matriz = Array(5).fill().map(() => Array(5).fill('<div class="circle">●</div>'));

    if (!executandoIA) {
        const numeroEstrelas = 4;
        for (let i = 0; i < numeroEstrelas; i++) {
            let linha, coluna;
            do {
                linha = Math.floor(Math.random() * 5);
                coluna = Math.floor(Math.random() * 5);
            } while (matriz[linha][coluna] === '<div class="star">★</div>');

            matriz[linha][coluna] = '<div class="star">★</div>';
        }
    }

    const padraoFormatado = matriz.map(row => row.join(' ')).join('\n');

    document.querySelector(".mines-board").innerHTML = padraoFormatado;

    if (executandoIA) {
        document.querySelectorAll('.info-container p').forEach(p => {
            p.textContent = '***';
        });
        document.getElementById('valid-until').textContent = '***';

        entryCount = 0;
    } else {
        document.querySelector('.info-container.tentativas p').textContent = '3';
        document.querySelector('.info-container.numero-de-minas p').textContent = '4';
        atualizarHorarioValido();

        if (document.getElementById('status-text').textContent === 'Sinal Encontrado!') {
            incrementEntryCount();
        }
    }

    document.getElementById('Countpeople').textContent = `${entryCount} PESSOAS FIZERAM ENTRADA`;
}

function mostrarNotificacao() {
    const notificationStatus = document.querySelector('.notification-status');
    notificationStatus.style.top = '20px';

    setTimeout(() => {
        esconderNotificacao();
    }, 2000);
}

function esconderNotificacao() {
    const notificationStatus = document.querySelector('.notification-status');
    notificationStatus.style.top = '-100px';
}

function iniciarExecucaoIA() {
    isExecutingIA = true;
    document.getElementById('status-text').textContent = 'Executando IA';
    gerarPadraoAleatorio(true);

    setTimeout(function () {
        document.getElementById('status-text').textContent = 'Sinal Encontrado!';
        gerarPadraoAleatorio(false);
        mostrarNotificacao();
        isExecutingIA = false;
    }, 5000);
}

iniciarExecucaoIA();

setInterval(function () {
    iniciarExecucaoIA();
}, 180000);

function atualizarHorarioValido() {
    const horarioAtual = new Date();
    horarioAtual.setMinutes(horarioAtual.getMinutes() + 3);
    const horas = horarioAtual.getHours().toString().padStart(2, '0');
    const minutos = horarioAtual.getMinutes().toString().padStart(2, '0');
    const horarioFormatado = `${horas}:${minutos}`;
    const statusText = document.getElementById('status-text').textContent;
    const validoAteContainer = document.querySelector('.info-container.valido-ate p');

    if (statusText === 'Executando IA') {
        validoAteContainer.textContent = '***';
    } else {
        validoAteContainer.textContent = horarioFormatado;
    }
}

atualizarHorarioValido();

setInterval(atualizarHorarioValido, 180000);

