//Código copiado de firebase, creación de app web
import { initializeApp } from "firebase/app";
import { getFirestone } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCgUYiW78AEisImUIwq2R-CQO1zEhIxfAk",
    authDomain: "intensivo-react-2022-ccca5.firebaseapp.com",
    projectId: "intensivo-react-2022-ccca5",
    storageBucket: "intensivo-react-2022-ccca5.appspot.com",
    messagingSenderId: "497232842522",
    appId: "1:497232842522:web:a43cc564c0e552a247e6a3"
};

// Inicializacón de Firebase
const app = initializeApp(firebaseConfig);

//Configuración de Firestore
const db = getFirestone(app);

// Configuración de la autenticación de Google
const googleAuthProvider = new GoogleAuthProvider();