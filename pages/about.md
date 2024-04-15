<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" id="favicon" href="/img/logo.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/logo.png">
    <link rel="icon" type="image/x-icon" href="/img/logo.png">
    <link rel="stylesheet" href="/css/style.css">
    <title>Aviator</title>
</head>
<body>
    <!-- Inicio nav -->
    <div class="navbar">
        <div class="navbar-left">
            <a href="/html/home.html">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <span class="navbar-brand">Aviator</span>
        </div>
        <div class="navbar-icons">
            <div class="share-icon">
                <i class="fa-regular fa-clipboard fa-lg"></i>
                <div class="share-dropdown" id="share-dropdown">
                    <a href="#" id="copy-link">Copiar Link</a>
                    <a href="#" id="share-whatsapp">Compartilhar no WhatsApp</a>
                    <a href="#" id="share-twitter">Compartilhar no Twitter ( 𝕏 )</a>
                </div>
            </div>
            <div class="copy-success-message" style="display: none;">Link copiado para a área de transferência!</div>
            <div id="notifications-icon">
                <i class="fa-regular fa-bell"></i>
                <span class="notification-badge" id="notification-badge">1</span>
                <div class="notification-dropdown">
                    <div class="notification-item">
                        <img src="/img/user.webp" alt="Logo do aplicativo" class="notification-logo">
                        <p>
                            <a href="https://go.aff.7k-partners.com/9sjxs8gr" class="notification-link">
                                <span class="notification-text">Bônus 100% do depósito em casino</span>
                                <span class="notification-highlight">Saiba Mais</span>
                            </a>
                        </p>
                    </div>
                    <div class="clear-notification">
                        <i id="close-dropdown" class="fas fa-times"></i>
                        <a href="#" id="clear-notification">Limpar notificações</a>
                    </div>
                </div>
            </div>
            <div class="user-dropdown">
                <img src="/img/user.webp" alt="Foto do usuário" class="user-avatar" id="user-avatar">
                <div class="user-dropdown-content" id="user-dropdown-content">
                    <span id="user-email"></span>
                    <hr class="divider">
                    <a href="#" id="logout">Encerrar sessão</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Fim navbar -->
    <div class="notification-status" id="notification-status">
        <p id="notificationStatus-text"><i class="fa-solid fa-check"></i> Sinal encontrado com sucesso!</p>
    </div>
    <div class="container dark-theme">
        <div class="space-message">
            <p id="space-text">Executando IA</p>
        </div>
        <div class="space-containers">
            <div class="space-container Proteções">
                <h3>Proteções</h3>
                <p id="protecoes-text">***</p>
            </div>
            <div class="space-container Saída">
                <h3>Saída</h3>
                <p id="saida-text">***</p>
            </div>
            <div class="space-container valido-ate">
                <h3>Válido até</h3>
                <p id="hora">***</p>
            </div>
        </div>
    </div>
    <div>
        <p id="Countspace">0 PESSOAS FIZERAM ENTRADA
        </p>
    </div>
    <div class="aviso">
        <i class="fas fa-exclamation"></i> O jogo não carregou? <a href="https://go.aff.7k-partners.com/n7wzq7az"
            target="_blank"><i class="fas fa-external-link-alt"></i> Clique aqui</a>
    </div>
    <div class="iframe-container">
        <iframe src="https://go.aff.7k-partners.com/n7wzq7az"></iframe>
    </div>
    <div class="separador" style="height:120px;"></div>
    <!-- MENU -->
    <div class="bottom-navigation">
        <a href="/html/home.html" class="bottom-nav-item home active">
            <i class="fas fa-home"></i>
            <span>Inicio</span>
        </a>
        <a href="https://go.aff.7k-partners.com/9sjxs8gr" class="bottom-nav-item plataforma">
            <i class="fa-solid fa-question"></i>
            <span>Plataforma</span>
        </a>
        <a href="https://go.aff.7k-partners.com/9sjxs8gr" class="bottom-nav-item resultados">
            <i class="fa-regular fa-circle-check"></i>
            <span>Resultados</span>
        </a>
        <a href="/html/ranking.html" class="bottom-nav-item ranking">
            <i class="fa-solid fa-medal"></i>
            <span>Ranking</span>
        </a>
        <a href="/html/bonus.html" class="bottom-nav-item bonus">
            <i class="fa-solid fa-star"></i>
            <span>Bônus</span>
        </a>
    </div>
    <script>
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let contadorEntrada = 0;
        let limiteContador = 0;
        const intervaloContador = 1000; 
        function atualizarConteudo() {
            const spaceText = document.getElementById("space-text").textContent;
            const protecoesText = document.getElementById("protecoes-text");
            const saidaText = document.getElementById("saida-text");
            const horaText = document.getElementById("hora");
            const countSpace = document.getElementById("Countspace");
            if (spaceText === "Executando IA") {
                protecoesText.textContent = "***";
                saidaText.textContent = "***";
                horaText.textContent = "***";
            } else if (spaceText === "Sinal Encontrado!") {
                const agora = new Date();
                agora.setMinutes(agora.getMinutes() + 3);
                const horaFormatada = agora.getHours().toString().padStart(2, "0");
                const minutoFormatado = agora.getMinutes().toString().padStart(2, "0");
                horaText.textContent = `${horaFormatada}:${minutoFormatado}`;
                protecoesText.textContent = "3";
                const numeroAleatorio = getRandomNumber(14, 20) / 10;
                saidaText.textContent = numeroAleatorio.toFixed(1);
                const notificationStatus = document.getElementById("notification-status");
                notificationStatus.style.top = "10px";
                setTimeout(function () {
                    notificationStatus.style.top = "-100px"; 
                }, 2000);
                setTimeout(iniciarContadorEntrada, 2000);
                setTimeout(reiniciarHorario, 180000); 
                setTimeout(function () {
                    contadorEntrada = 0;
                    countSpace.textContent = `${contadorEntrada} PESSOAS FIZERAM ENTRADA`;
                }, 180000);
            }
        }
        function iniciarContadorEntrada() {
            const countSpace = document.getElementById("Countspace");
            limiteContador = getRandomNumber(43, 98); 
            const intervalID = setInterval(function () {
                if (contadorEntrada < limiteContador) {
                    const aumento = getRandomNumber(1, 3); 
                    contadorEntrada += aumento;
                    if (contadorEntrada > limiteContador) {
                        contadorEntrada = limiteContador; 
                    }
                    countSpace.textContent = `${contadorEntrada} PESSOAS FIZERAM ENTRADA`;
                } else {
                    clearInterval(intervalID); 
                }
            }, intervaloContador);
        }
        function reiniciarHorario() {
            const horaElement = document.getElementById("hora");
            const agora = new Date();
            agora.setMinutes(agora.getMinutes() + 3); 
            const horaFormatada = agora.getHours().toString().padStart(2, "0");
            const minutoFormatado = agora.getMinutes().toString().padStart(2, "0");
            horaElement.textContent = `${horaFormatada}:${minutoFormatado}`;
            const spaceText = document.getElementById("space-text");
            spaceText.textContent = "Executando IA";
            setTimeout(function () {
                spaceText.textContent = "Sinal Encontrado!";
                const protecoesText = document.getElementById("protecoes-text");
                const saidaText = document.getElementById("saida-text");
                protecoesText.textContent = "3";
                const numeroAleatorio = getRandomNumber(14, 20) / 10;
                saidaText.textContent = numeroAleatorio.toFixed(1);
                const notificationStatus = document.getElementById("notification-status");
                setTimeout(function () {
                    notificationStatus.style.top = "-100px"; 
                }, 2000);
            }, 4000);
        }
        atualizarConteudo();
        const targetNode = document.getElementById("space-text");
        const observer = new MutationObserver(atualizarConteudo);
        const config = { childList: true, characterData: true, subtree: true };
        observer.observe(targetNode, config);
        setTimeout(function () {
            document.getElementById("space-text").textContent = "Sinal Encontrado!";
        }, 4000);
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/js/script.js"></script>

</body>

</html>
