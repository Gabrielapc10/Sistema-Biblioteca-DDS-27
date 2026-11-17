// importacao do modulo de express
const express = require("express")
const app = express()

// modulo do node para lidar com caminho de arquivos
const path = require("path")

// importa o modulo do dotenv, le o arquivo .env, e ja configura o banco 
require('dotenv').config()

// define a porta do servidor 
const port = process.env.PORT || 5000

// configurar o ejs como template engine 
// define o ejs como engine do front - interpreta as paginas m
app.set("view engine", "ejs")
// apontar para o ejs onde estao as paginas 
app.set("views", path.join(__dirname, "../client/views") )

// criacao das rotas 

// importar as rotas de usuario 
const usuarioRoutes = require("./routes/usuarioRoutes.js")
app.use("/usuarios", usuarioRoutes)

// rotas publicas
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/login", (req, res) => {
    res.render('login')
})


// traz as configuraçoes do banco
const pool = require("./config/db.js");

// forca a conexao com o banco 
( 
    async () => {
        try{
            // se o banco estiver ativo,inicia o servidor do banco
            await pool.getConnection()
            console.log("Banco foi conectado");
            // se o banco subiu, sobe o backend
            // funcao para subir o servidor 
            app.listen(port, () =>{
                console.log(`Sevidor na porta: ${port}`);
                console.log(`Link: http://localhost:${port}`);   
            })
        }
        catch(erro){
            // se deu erro, avisa e encerra a tentativa
            console.log("Erro ao conectar com o banco");
            process.exit(1)
        }
    }
)()

