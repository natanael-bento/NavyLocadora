
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD-s8_15tuIkyV0DvAp2lnBoFx9e0cX87k",
    authDomain: "projeto-fatec-locadora.firebaseapp.com",
    databaseURL: "https://projeto-fatec-locadora-default-rtdb.firebaseio.com",
    projectId: "projeto-fatec-locadora",
    storageBucket: "projeto-fatec-locadora.appspot.com",
    messagingSenderId: "428810569718",
    appId: "1:428810569718:web:cd755ea98ed5be2efba9d7",
    measurementId: "G-ECR55G0KD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
exports.auth = auth;