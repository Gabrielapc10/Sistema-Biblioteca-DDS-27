// importacao do modulo do express
const express = require("express")
const router = express.Router()

// importar o controler do usuario
const usuarioControllers = require("../controllers/usuarioControllers.js")

// rotas do usuario
// login
router.post("/login", usuarioControllers.login)

// crud
// mostra a pagina de criar usuario
router.get("/cadastrar", (req,res) =>{
    res.render("usuarios/cadastrar")
})
// mandar as informacoes de cadastro para o controller
router.post("/cadastrar", usuarioControllers.criar)

// mostrar a pagina de editar usuario 
router.get("/editar", (req,res) =>{
    res.render("usuarios/editar")
})

// mostar a pagina de listar usuario
router.get("/listar",usuarioControllers.listar)

router.get("/", usuarioControllers.listar)


// rota de deletar um usuario  
router.post("deletar/:id", usuarioControllers.deletar)


// exportar o router 
module.exports = router