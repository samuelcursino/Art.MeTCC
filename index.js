const express = require('express');
const rotasUser_vendedor = require('./route/routeUser_Vendedor');
const rotasProduto = require('./route/routeProduto');
const rotasCategoria_Produto = require('./route/routeCategoria_Produto');
const rotasUser_Cliente = require('./model/modelUser_Cliente');

const app = express();

app.use(express.json());

console.log('teste rodando')

app.use('/', rotasUser_vendedor);
app.use('/', rotasProduto);
app.use('/', rotasCategoria_Produto);
app.use('/',rotasUser_Cliente);

app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 3000 - http://localhost:3000');
});