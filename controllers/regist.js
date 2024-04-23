import { registerMail, correoVerifi, signInWithGoogle, popup_facebook } from "../controllers/global.js"

const registEmails = document.getElementById('btnRegist');

async function registMail() {
    try {
        if (window.pase === true) {
            const email = document.getElementById("mail").value;
            const password = document.getElementById("pass").value;
            const user = await registerMail(email, password);
            await correoVerifi(email);
            alert('Registro exitoso. Por favor, verifica tu correo electrónico.');
            window.location.href = "../index.html";
        }
    } catch (error) {
        alert('Error al registrar: ' + error.message);
    }
}

registEmails.addEventListener('click', registMail);

const googleRegistBtn = document.getElementById("googleRegistBtn");

googleRegistBtn.addEventListener('click', async () => {
    try {
        await signInWithGoogle();
        alert('Registro exitoso');
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error al registrar con Google: ' + error.message);
    }
});

const facebookRegistBtn = document.getElementById("facebookRegistBtn");

facebookRegistBtn.addEventListener('click', async () => {
    try {
        await popup_facebook();
        alert('Registro exitoso');
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error al registrar con Facebook: ' + error.message);
    }
});