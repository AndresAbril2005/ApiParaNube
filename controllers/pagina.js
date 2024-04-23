import { userstate, logout } from "../controllers/global.js";

userstate()

const cerrar=document.getElementById('logout')

async function sesion(){
    const validar = logout()
    const verificar = await validar

    .then((verificar) => {
        alert ('sesion cerrada')
        window.location.href="../index.html"
    }).catch((error) => {
        alert('Sesion no cerrada')
    });
}

window.addEventListener('DOMContentLoaded', async()=>{
    cerrar.addEventListener('click',sesion)
})


