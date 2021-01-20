
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_SzVdqcmbHdBqnhm4EI5UyK9o8b4bOhQ",
    authDomain: "instagram-clone-react-f90ff.firebaseapp.com",
    projectId: "instagram-clone-react-f90ff",
    storageBucket: "instagram-clone-react-f90ff.appspot.com",
    messagingSenderId: "296568764607",
    appId: "1:296568764607:web:ed6940e269173cfb71ee0a",
    measurementId: "G-HMRJW9PCTY"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}