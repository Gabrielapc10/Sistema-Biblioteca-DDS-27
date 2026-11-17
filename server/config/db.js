// importando o mosulo do mysql para conectar ao banco
const mysql = require("mysql2/promise")

// cria uma poll da conexao, para evitar arros no banco por superlotacao
const pool = mysql.createPool(
    {
        host: process.env.DB_HOST, // ONDE O BANCO ESTA HOSPEDADO,
        user: process.env.DB_USER, // USUARIO QUE FARA A CONEXAO, 
        password: process.env.DB_PASSWORD, //SENHA DO USUARIO,
        database: process.env.DB_NAME, // BANCO AO QUAL SE DESEJA CONECTAR,
        // SE TODOS ESTIVERAM OCUPADOS, DEIXA UM ESPERANDO , SEM DAR ERRO
        waitForConnections: true,
        // quantidade maxima de conexoes ao mesmo tempo 
        connectionLimit: 10,
        // maximo de lista de espera 
        queueLimit: 0 // 0 = ilimitado
    }
)

// exportacao da pool 
module.exports = pool 
               