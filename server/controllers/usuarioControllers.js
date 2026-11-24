// importacao do model 
const usuarioModels = require("../models/usuarioModels.js")

// exportar as funcoes do controller 
module.exports = {
    // login
    login : async (req, res) =>{
       try{
            // coleta as informacoes do body da requisicao
            const {email, senha} = req.body
            // passa as informacoes pro model
            const usuarioLogado = await usuarioModels.login(email, senha) 

            //  se nao tiver usuario, ja retorna a pagina de erro
            if(!usuarioLogado){
                return res.render("erro", { erro, mensagem: "credenciais invalidas"})
            }
            // guarda o usuario na sessao
            req.session.usuario = usuarioLogado

            // ativa a funcao se salvar, e garante que tera uma
            req.session.save( (erro) => {
                // se deu erro ao salvar informa
                if(erro){
                    return res.render("erro", { erro, mensagem: "Erro ao criar sessão"})
                }
                // se deu certo redireciona
                return res.redirect("/usuarios")
            })
       }
       catch (erro){
            // mostra o erro no terminal
            console.log(erro)
            // redenriza a pagina de erro, mostrando pro usuario uma mensagem 
            res.render("erro", {erro, mensagem: "Erro ao logar"})  
       }
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
            const listaUsuarios = await usuarioModels.listarUsuarios()
            // redenriza a tela de lista, passando o que o model te mandou
            res.render('usuarios/listar', { listaUsuarios })
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
    deletar: async (req, res) =>{
        try{
            // pegar o id, vindo da url, atraves dos parametros
            const idDaUrl = req.params
            // manda pro model o id pra ele fazer o serviço
            await usuarioModels.deletarUsuario(idDaUrl)

            // redireciona pra lista de usuarios 
            res.redirect("/usuarios")
        }
        catch (erro){
            console.log(erro);
            res.render("erro", { erro, mensagem: "Erro ao deletar o usuário"})            
        }
    }
}