const { db } = require('./conexao');
const UsuarioRef = db.ref("Usuario");
const UsuarioChild = db.ref().child('Usuario');

module.exports = {
  listarUsuarios: async function () {
    try {
        return await UsuarioRef.once("value", async (snapshot) => {
          //console.log(snapshot.val())
          return await snapshot.val();
        })
    } catch (err) {
      console.log(err.stack);
    }
  },
  adicionarUsuario: async function () {
    try {
      UsuarioChild.update(
        {
          celular: 'June 23, 1912',
          email: 'Alan Turing',
          nome: "",
          sexo: ""
        }
      );
    } catch (err) {
      console.log(err.stack);
    }
  },

};
