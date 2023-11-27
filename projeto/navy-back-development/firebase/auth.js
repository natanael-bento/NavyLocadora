const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("./conexao");

module.exports = {
    adicionar: async function (email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage };
        }
    },
    login: async function (email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage };
        }
    }
}