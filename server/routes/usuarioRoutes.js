// importacao do modulo do express
const express = require("express")
const router = express.Router()

// importar o controler do usuario
const usuarioControllers = require("../controllers/usuarioControllers.js")

// rotas do usuario
// login
router.get("/login", usuarioControllers.login)

// crud
// mostra a pagina de criar usuario
router.get("/cadastrar", (req,res) =>{
    res.render("usuarios/cadastrar")
})

router.get("/listar", (req,res) =>{
    res.render("usuarios/listar")
})

router.get("/editar", (req,res) =>{
    res.render("usuarios/editar")
})


router.get("/", (req, res) => {
    res.send("Mostrando a lista de usuarios")
})

// exportar o router 
module.exports = router