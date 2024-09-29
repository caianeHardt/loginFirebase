import { initializeApp } from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAcS8BPGnNP0oYv4JZ_pjTzMKi2uS0ln0s",
    authDomain: "projetopuccaiane.firebaseapp.com",
    projectId: "projetopuccaiane",
    storageBucket: "projetopuccaiane.appspot.com",
    messagingSenderId: "406698643172",
    appId: "1:406698643172:web:e29cf49a9ad43a17ffe6f1"
};
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)