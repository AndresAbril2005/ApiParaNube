import { db } from './configuracion.js';

function guardar(){
db.collection("usuario").add({
    nombre:document.getElementById("nombre").value,
    telefono: document.getElementById("telefono").value
})
.then((docRef) => {
   alert("registro exitoso")
})
.catch((error) => {
  alert ("registro fallido")
});
}