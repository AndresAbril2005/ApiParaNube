import { recovery } from "../controllers/global.js"

const event = document.getElementById("recoverbtn")
const titulo = document.getElementById("title")

async function recoveryAcc() {
    const email = document.getElementById('emailRecover').value

    if (email === "") {
        alert("Debe ingresar un correo")
        return 1;

    } else if (email.indexOf("@") === -1) {
        alert("El correo electrónico no es válido, use uno real")
        return 1;
    }

    const verificar = recovery(email)
    const validation = await verificar

        .then((validation) => {
            alert("Correo de recuperación enviado a " + email + " entre al link del correo para reestablecer contraseña")
            window.location.href = "../index.html"
        })
        .catch((error) => {

            console.error("Error al enviar el correo de recuperación:", error);
            alert("Ocurrió un error al enviar el correo de recuperación. Por favor, inténtalo de nuevo más tarde.");
        })

}

window.addEventListener('DOMContentLoaded', async () => {
    event.addEventListener('click', recoveryAcc)
})