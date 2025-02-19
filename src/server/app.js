// Importando os módulos necessários
const express = require('express') // Framework web para Node.js
const cors = require('cors') // Middleware para habilitar CORS
const path = require('path') // Módulo para manipulação de caminhos

// Carregando variáveis de ambiente do arquivo .env
require('dotenv').config();

// Criando uma instância do Express
const app = express()

// Importando as rotas da aplicação
const routes = require('./routes/routes')

// Definindo a porta do servidor (usa a variável de ambiente PORT ou 3000 como padrão)
const PORT = process.env.PORT || 3000;

// Configurando os middlewares
app.use(cors()) // Habilita o CORS para todas as rotas
app.use(express.json()) // Permite o parsing de JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })) // Permite o parsing de dados de formulário
app.use(express.static(path.join(__dirname, 'public'))) // Serve arquivos estáticos da pasta public
app.use(routes) // Registra as rotas da aplicação

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});