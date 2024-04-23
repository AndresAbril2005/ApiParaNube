import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAtc-f5N6Onj67YKjj-YTnqIWjHdaF7nlk",
  authDomain: "web2024-9794a.firebaseapp.com",
  projectId: "web2024-9794a",
  storageBucket: "web2024-9794a.appspot.com",
  messagingSenderId: "264039668151",
  appId: "1:264039668151:web:1eb0e1b53779bf30ecf032",
  measurementId: "G-XSNSQ8FFLW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
