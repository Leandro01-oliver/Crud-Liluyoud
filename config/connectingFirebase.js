import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQkbob9NTFN8nzqZoui1WzkGumwKSGVZc",
    authDomain: "crud-aula-21379.firebaseapp.com",
    projectId: "crud-aula-21379",
    storageBucket: "crud-aula-21379.appspot.com",
    messagingSenderId: "278197624798",
    appId: "1:278197624798:web:71972a151820f76276c74f",
    measurementId: "G-Q9W7267SB6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }