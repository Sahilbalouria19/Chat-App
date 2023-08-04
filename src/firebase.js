import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCcIQrAdSIb2KsAsVb-7VMQ90JVRNWuGHU",
    authDomain: "chat-cc6ef.firebaseapp.com",
    projectId: "chat-cc6ef",
    storageBucket: "chat-cc6ef.appspot.com",
    messagingSenderId: "514139300464",
    appId: "1:514139300464:web:24f251308190ca42cb0ab5"
}).auth();