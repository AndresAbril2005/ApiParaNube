import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

const firebaseConfig={
apiKey: "AIzaSyDMLuixGvkU0EhI2RsUXYkfmEwWZwCktt8",
  authDomain: "apiwebabril.firebaseapp.com",
  projectId: "apiwebabril",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };