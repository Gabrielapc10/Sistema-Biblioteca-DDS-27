// importacao do model 
const usuarioModels = require("../models/usuarioModels.js")

// exportar as funcoes do controler 
module.exports = {
    // login
    login : (req, res) =>{
        // executar a funcao no model
        usuarioModels.login()

        // diz a resposta 
        res.send("Vou chamar o model pra logar")
    },
    // crud
    // create
    criar: (req,res) =>{
        usuarioModels.criarUsuario()
        res.send("Crie um usuario ")       
    },
    // read
    listar: (req, res) => {
        usuarioModels.listarUsuarios()
        res.send("Mostrei a lista de usuarios")
    },
    // update
    atualizar: (req,res) =>{
        usuarioModels.atualizarUsuario()
        res.send("Atualizei um usuario")       
    },
    // delete
    deletar: (req, res) =>{
        usuarioModels.deletarUsuario()
        res.send("Deletei um usuario")
    }
}