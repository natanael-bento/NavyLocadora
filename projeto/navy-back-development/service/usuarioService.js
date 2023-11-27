const usuarioRepository = require('../repository/usuarioRepository');
const authFirebase = require('../firebase/auth');

module.exports = {
    listarUsuarios: async function () {
        return await usuarioRepository.listarUsuarios();
    },
    adicionar: async function (email, password) {
        let response = await authFirebase.adicionar(email, password);
        console.log(response)
        return response;
    },
    login: async function (email, password) {
        return await authFirebase.login(email, password)
    },

};