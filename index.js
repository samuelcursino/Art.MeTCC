const express = require('express');
const rotasCategoriaServico = require('./route/routeCategoriaServico');
const rotasUsuario = require('./route/routeUsuario');
const rotasCategoria_Produto = require('./route/routeCategoria_Produto');
const rotasUser_Cliente = require('./model/modelUser_Cliente');

const app = express();

app.use(express.json());

console.log('teste fluindo')

app.use('/', rotasCategoriaServico);
app.use('/', rotasUsuario);
app.use('/', rotasCategoria_Produto);
app.use('/',rotasUser_Cliente);

app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 3000 - http://localhost:3000');
});