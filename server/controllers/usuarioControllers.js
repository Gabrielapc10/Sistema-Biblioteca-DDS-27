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
    criar: async (req, res) =>{
        try{
            // coleta as informacoes do body da requisicao
            const {nome, email, senha, perfil } = req.body
             
            // passa as informacoes pro model
            await usuarioModels.criarUsuario(nome, email, senha, perfil)

            // redireciona para a pagina de lista de usuario
            res.redirect("/usuarios")
        }
        catch(erro){
            // mostra o erro no terminal
            console.log(erro)
            // redenriza a pagina de erro, mostrando pro usuario uma mensagem 
            res.render("erro", {erro, mensagem: "Erro ao criar o usuário"})            
        }
    },
    // read
    listar: async (req, res) => {
        try{
            // executa o model
            const listaUsuarios = await usuarioModels.listaUsuarios()
            // redenriza a tela de lista, passando o que o model te mandou
            res.render('usuario/listar', { listaUsuarios })
        }
        catch(erro){
            console.log(erro);
            res.render("erro", {erro, mensagem: "Erro ao listar os usuarios"})
        }
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