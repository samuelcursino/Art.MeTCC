const express = require('express');
const rotasCategoriaServico = require('./route/routeCategoriaServico');
const rotasUsuario = require('./route/routeUsuario');
const rotasServico = require('./route/routeServico');
const rotasChat = require('./route/routeChat');

const app = express();

app.use(express.json());

console.log('teste fluindo')

app.use('/', rotasCategoriaServico);
app.use('/', rotasUsuario);
app.use('/', rotasServico);
app.use('/', rotasChat);

app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 3000 - http://localhost:3000');
});