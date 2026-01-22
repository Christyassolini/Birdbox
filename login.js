const loginContainer = document.getElementById("login-container");
const cadastroContainer = document.getElementById("cadastro-container");
const passwordInput = document.getElementById("password-login");
const eyeIcon = document.querySelector(".eye-icon");
const navMenu = document.getElementById("nav-menu");
const menuToggle = document.querySelector(".menu-toggle");

/**
 * Alterna a visibilidade do menu mobile
 */
function toggleMenu() {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

/**
 * Alterna a visibilidade da senha entre texto e password
 */
function togglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-closed-icon lucide-eye-closed"><path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/></svg>';
    } else {
        passwordInput.type = "password";
        eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>';
    }
}

/**
 * Valida se as senhas coincidem no cadastro
 */

function validarCadastro() {

    const senha = document.getElementById('password-cadastro').value;
    const confirmarSenha = document.getElementById('confirm-password').value;
    const nome = document.getElementById("name").value;
    const emailCadastro = document.getElementById("email-cadastro").value;

    if (emailCadastro === "" || senha === "" || nome === "") {
        window.alert('Preencha todos os campos!');
        return;
    }
        
    if (confirmarSenha !== senha) {
        window.alert('As senhas não coincidem!')
        return;
    }
    window.alert('Cadastro realizado com sucesso!');
    location.href = "../tela-categoria/categoria.html";
}

/**
 * Valida o login (placeholder - implementar validação real)
 */
function validarLogin() {
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('password-login').value;
    
    if (email && senha) {
        alert('Login realizado com sucesso!');
        location.href = "../tela-categoria/categoria.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

/**
 * Mostra o formulário de cadastro e esconde o de login
 */
function mostrarCadastro() {
    loginContainer.classList.remove("active");
    cadastroContainer.classList.add("active");
}

/**
 * Mostra o formulário de login e esconde o de cadastro
 */
function mostrarLogin() {
    cadastroContainer.classList.remove("active");
    loginContainer.classList.add("active");
}

/* ============== GSAP ============== */

gsap.to("body", {
    backdropFilter: "blur(5px)",
    duration: 0.5,
});

gsap.from(".container", {
    opacity: 0,
    scale: 0.95,
    duration: 0.3,
    ease: "power1.inOut",
});