// importando as configuracoes do banco
const db = require("../config/db.js")

// exportar as funcos do model 
module.exports = {
    // login
    login :async (email, senha) =>{
        // variavel para guardar o comando
        const sql = `SELECT * FROM tb_usuarios
                    WHERE email = ? AND senha = ?` 
        // executa o sql 
        const [resultado] = await db.execute(sql, [email, senha]) 
        // retorna pro controller
        return resultado[0] || null
    },
    // crud
    // create
    criarUsuario: async (nome, email, senha, perfil) =>{
        // variavel para guardar o comando sql 
        const sql = `INSERT INTO tb_usuarios (nome, email, senha, perfil)
        VALUES (?, ?, ?, ?)`
        // executa o sql
        const [resultado] = await db.execute(sql, [nome, email, senha, perfil])
        // retorna pro controler o resultado
        return resultado.insertId
    },
    // read
    listarUsuarios: async () => {
        // variavel pra guardar o comando sql
        const sql = `SELECT * FROM tb_usuarios`

        // executa o sql
        const [linhas] = await db.execute(sql)
        
        // retorna pro controller o resultado                    
        return linhas
    },
    // update
    atualizarUsuario: () =>{
        console.log("Atualizei um usuario");        
    },
    // delete
    deletarUsuario: async (id) =>{
        // variavel para guardar o comando sql
        const sql = `DELETE FROM tb_usuarios WHERE id_usuario = ?`
        // executa o sql
        const [resultado] = await db.execute(sql, [id])
        // retorna pro controller o resultado
        return resultado.affectedRows
    }
}