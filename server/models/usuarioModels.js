// importando as configuracoes do banco
const db = require("../config/db.js")

// exportar as funcos do model 
module.exports = {
    // login
    login : () =>{
        console.log("Login usuario funcionando");
    },
    // crud
    // create
    criarUsuario: () =>{
        console.log("Criei um usuario");        
    },
    // read
    listarUsuarios: () => {
        console.log("Toma ai os usuarios");
    },
    // update
    atualizarUsuario: () =>{
        console.log("Atualizei um usuario");        
    },
    // delete
    deletarUsuario: () =>{
        console.log("Apaguei um usuario");
    }
}