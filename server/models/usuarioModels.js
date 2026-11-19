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
    criarUsuario: async (nome, email, senha, perfil) =>{
        // variavel para guardar o comando sql 
        const sql = `INSERT INTO tb_usuarios (nome, email, senha, perfil)
                     + VALUES (?, ?, ?, ?)`
        // executa o sql
        const [resultado] = await db.execute(sql, [nome, email, senha, perfil])
        // retorna pro controler o resultado
        return resultado.insertId
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