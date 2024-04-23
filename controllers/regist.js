import { popup_facebook, loginvalidation, signInWithGoogle } from "../controllers/global.js";


const registEmails = document.getElementById('btnRegist')

async function registMail() {
    if (window.pase) {
        const validar = loginvalidation()
        const verificar = await validar

            .then((verificar) => {
                alert('sesion cerrada')
                window.location.href = "../index.html"
            }).catch((error) => {
                alert('Sesion no cerrada')
            });
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    registEmails.addEventListener('click', registMail)
})

const googleRegistBtn = document.getElementById("googleRegistBtn");

googleRegistBtn.addEventListener('click', async () => {
    try {
        await signInWithGoogle();
        const user = result.user;
        alert('Authentication successful: ' + user.email);
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error: authentication unsuccessful');
        console.log('Session not validated');
    }
});

const facebookRegistBtn = document.getElementById("facebookRegistBtn");

facebookRegistBtn.addEventListener('click', async () => {
    try {
        await popup_facebook();
        alert('Authentication successful: ');
        window.location.href = '../templates/pagina.html';
    } catch (error) {
        alert('Error: authentication unsuccessful');
        console.log('Session not validated');
    }
});
