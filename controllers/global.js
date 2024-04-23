import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  deleteUser
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDMLuixGvkU0EhI2RsUXYkfmEwWZwCktt8",
  authDomain: "apiwebabril.firebaseapp.com",
  projectId: "apiwebabril",
  storageBucket: "apiwebabril.appspot.com",
  messagingSenderId: "715996924225",
  appId: "1:715996924225:web:68b3f3400d259ce693b9c0",
  measurementId: "G-7T1NTRK3JX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Método de inicio de sesión con correo y contraseña
export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Método de cierre de sesión
export const logout = () => signOut(auth);

// Estado del usuario
export function userstate() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location.href = "../index.html";
    }
  });
}

const providerFacebook = new FacebookAuthProvider();
// Iniciando con Facebook
export const popup_facebook = () =>
  signInWithPopup(auth, providerFacebook)

//enviar correo verificacion registro
const actionCodeSettings = {
  url: 'https://andresabril2005.github.io/ApiParaNube/index.html',
  handleCodeInApp: true
}
export const correoVerifi = (email) =>
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      alert("Correo de verificación enviado correctamente.")
    })
    .catch((error) => {
      alert("Error al enviar el correo de verificación: " + error)
    })

//regist
export const registerMail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

//recovery
export const recovery = (email) =>
  sendPasswordResetEmail(auth, email)

//borrar
export const borrar_account = () =>
  deleteUser(user)