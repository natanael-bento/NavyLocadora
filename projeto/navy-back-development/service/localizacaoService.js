const localizacaoRepository = require('../repository/localizacaoRepository');


module.exports = {
    obterTop10Proximo: async function () {
        return await localizacaoRepository.listarTodos();
    },

};