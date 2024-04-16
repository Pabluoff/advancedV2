// Função para verificar o email e realizar o login
function verificarEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const loginButton = document.getElementById('login-button');
    const loading = document.querySelector('.loading');
    const loginText = document.getElementById('login-text');
    const arrowIcon = loginButton.querySelector('i'); // Seleciona o ícone

    if (emailValue === '' || !isValidEmail(emailValue)) {
        exibirNotificacao('Por favor, insira um e-mail válido.');
    } else {
        loginText.style.visibility = 'hidden'; 
        loading.style.display = 'block';

        arrowIcon.style.visibility = 'hidden';

        loginButton.classList.add('loading-active');

        localStorage.setItem('email', emailValue);

        setTimeout(function () {
            exibirNotificacaoSucesso('Seu login foi realizado com sucesso!');
            setTimeout(function () {
                window.location.href = '/Início';
            }, 1000);

            loginText.style.visibility = 'visible'; 
            
            arrowIcon.style.visibility = 'visible';

            loading.style.display = 'none';

            loginButton.classList.remove('loading-active');
        }, 3000);
    }
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function exibirNotificacao(mensagem) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = mensagem;

    notification.classList.remove('slide-out');
    notification.classList.add('slide-in');

    setTimeout(function () {
        fecharNotificacao();
    }, 3000);
}

function fecharNotificacao() {
    const notification = document.getElementById('notification');
    notification.classList.remove('slide-in');
    notification.classList.add('slide-out');
}

function exibirNotificacaoSucesso(mensagem) {
    const notificationSuccess = document.getElementById('notification-success');
    const notificationSuccessText = document.getElementById('notification-success-text');
    notificationSuccessText.textContent = mensagem;

    notificationSuccess.classList.remove('slide-out');
    notificationSuccess.classList.add('slide-in');

    setTimeout(function () {
        fecharNotificacaoSucesso();
    }, 3000);
}

+function fecharNotificacaoSucesso() {
    const notificationSuccess = document.getElementById('notification-success');
    notificationSuccess.classList.remove('slide-in');
    notificationSuccess.classList.add('slide-out');
}

function recuperarEmailSalvo() {
    const email = localStorage.getItem('email');
    if (email) {
        const emailInput = document.getElementById('email');
        emailInput.value = email;
    }
}

window.onload = function () {
    recuperarEmailSalvo();
};


function mostrarUserDropdown() {
    const userDropdown = document.getElementById('user-dropdown-content');
    userDropdown.style.display = 'block';

    document.addEventListener('click', fecharUserDropdownFora);
}

function ocultarUserDropdown() {
    const userDropdown = document.getElementById('user-dropdown-content');
    userDropdown.style.display = 'none';

    document.removeEventListener('click', fecharUserDropdownFora);
}

function fecharUserDropdownFora(event) {
    const userDropdown = document.getElementById('user-dropdown-content');
    const userAvatar = document.getElementById('user-avatar');

    if (!userDropdown.contains(event.target) && event.target !== userAvatar) {
        ocultarUserDropdown();
    }
}

function carregarInformacoesUsuario() {
    const userEmail = localStorage.getItem('email');
    const userAvatar = document.getElementById('user-avatar');
    const userDropdown = document.getElementById('user-dropdown-content');
    const userLogout = document.getElementById('logout');
    const userEmailElement = document.getElementById('user-email');

    if (userEmail) {
        userEmailElement.textContent = userEmail;
        userDropdown.style.display = 'none';
        userAvatar.addEventListener('click', mostrarUserDropdown);
    } else {
        userAvatar.style.display = 'none';
        userDropdown.style.display = 'none';
        userLogout.style.display = 'none';

        if (!userEmail) {
            window.location.href = '/';
        }
    }
}

function fazerLogout() {
    localStorage.removeItem('email');
    window.location.href = '/';
}

carregarInformacoesUsuario();
document.getElementById('logout').addEventListener('click', fazerLogout);


const notificationsIcon = document.getElementById('notifications-icon');
const notificationDropdown = document.querySelector('.notification-dropdown');

function mostrarNotificationDropdown(event) {
    event.stopPropagation();
    notificationDropdown.style.display = 'block';
    document.removeEventListener('click', ocultarNotificationDropdownFora);
    document.addEventListener('click', ocultarNotificationDropdownFora);
}

function ocultarNotificationDropdown() {
    notificationDropdown.style.display = 'none';
    document.removeEventListener('click', ocultarNotificationDropdownFora);
}

function ocultarNotificationDropdownFora(event) {
    if (!notificationDropdown.contains(event.target) && event.target !== notificationsIcon) {
        ocultarNotificationDropdown();
    }
}

notificationsIcon.addEventListener('click', mostrarNotificationDropdown);

ocultarNotificationDropdown();

const clearNotificationLink = document.getElementById('clear-notification');

const notificationBadge = document.getElementById('notification-badge');

const notificationArea = document.querySelector('.notification-item p');

function limparNotificacoes() {

    notificationArea.innerHTML = '<p style="text-align: center; color: #949494;">Sem notificações</p>';

    notificationBadge.textContent = '0';

    const notificationLogo = document.querySelector('.notification-logo');

    if (notificationLogo) {
        notificationLogo.remove();
    }

    ocultarNotificationDropdown();
}

clearNotificationLink.addEventListener('click', limparNotificacoes);

const closeDropdownIcon = document.getElementById('close-dropdown');

function ocultarDropdownAoClicar(event) {
    event.stopPropagation();
    ocultarNotificationDropdown();
}

closeDropdownIcon.addEventListener('click', ocultarDropdownAoClicar);


function getRandomName() {
    const names = ['Miguel', 'João', 'Ana', 'Pedro', 'Sofia', 'Lara', 'Carlos', 'Laura', 'Isabel', 'Lucas', 'Marina', 'Rafael', 'Beatriz', 'Gustavo', 'Júlia', 'Daniel', 'Maria', 'Luiza', 'Fernando', 'André'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function createRandomUser() {
    const games = ['Fortune Tiger', 'Fortune Mouse', 'Football', 'Fortune OX', 'Mines', 'Crash', 'Fortune Rabbit', 'Aviator', 'Piggy Gold', 'SpaceMan' ];

    const randomName = getRandomName();
    const randomGame = games[Math.floor(Math.random() * games.length)];

    const randomValue = (Math.random() * (500 - 10) + 10).toFixed(2);

    return `
        <div class="slider-item">
            <i class="fa-brands fa-pix"></i>
            <p class="player-name">${randomName} <span class="won-text">ganhou</span> <span class="won-value">R$${randomValue}</span> <span class="game-name">no ${randomGame}</span></p>
        </div>
    `;
}

function animateSlider() {
    const slider = $('#slider');
    const firstItem = slider.find('.slider-item:first');
    const itemWidth = firstItem.outerWidth(true);

    slider.animate({ marginLeft: -itemWidth }, 3000, 'linear', function () {
        firstItem.appendTo(slider);
        slider.css('margin-left', 0);
        animateSlider();
    });
}

$(document).ready(function () {
    for (let i = 0; i < 15; i++) {
        const randomUser = createRandomUser();
        $('#slider').append(randomUser);
    }

    animateSlider();
});


$(document).ready(function () {
    $("#share-dropdown").hide();
    $(".share-icon").on("click", function (event) {
        event.stopPropagation();
        $("#share-dropdown").slideToggle();
    });

    $("#copy-link").on("click", function () {
        const currentPageURL = window.location.href;
        const tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(currentPageURL).select();
        document.execCommand("copy");
        tempInput.remove();

        const copySuccessMessage = $(".copy-success-message");
        copySuccessMessage.slideDown();

        setTimeout(function () {
            copySuccessMessage.slideUp();
        }, 2000);
    });

    $("#share-whatsapp").on("click", function () {
        const shareText = "Você está pronto para transformar seu celular em uma máquina de palpites? Não é segredo que as Inteligências artificiais estão dominando a internet, nosso software de palpites é baseado em IA ( inteligência artificial ) você terá acesso a informações privilegiadas e análises precisas que podem levá-lo à vitória. Clique no link e faça parte do time vencedor. O sucesso espera por você. 🏆" + window.location.href;
        const shareURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(shareText);
        window.open(shareURL, "_blank");
    });

    $("#share-twitter").on("click", function () {
        const shareURL = "https://twitter.com/share?url=" + encodeURIComponent(window.location.href);
        window.open(shareURL, "_blank");
    });

    $(document).on("click", function () {
        $("#share-dropdown").slideUp();
    });

    $("#share-dropdown").on("click", function (event) {
        event.stopPropagation();
    });

    //  copiar a URL ao clicar no texto "Compartilhe nosso site" ou no ícone de cópia
    $("#share-link, #copy-icon").on("click", function () {
        const currentPageURL = window.location.href;
        const tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(currentPageURL).select();
        document.execCommand("copy");
        tempInput.remove();

        const copySuccessMessage = $(".share-success-message");
        copySuccessMessage.slideDown();

        setTimeout(function () {
            copySuccessMessage.slideUp();
        }, 2000);
    });
});



function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

document.getElementById("ios-container").addEventListener("click", function () {
    openModal("ios-modal");
});

document.getElementById("android-container").addEventListener("click", function () {
    openModal("android-modal");
});

var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        var modalId = closeButton.closest(".modal").id;
        closeModal(modalId);
    });
});

window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
});
