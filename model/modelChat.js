const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelChat = connection.define(
    'tbl_chat',
    {
        Mensagem:{
            type: Sequelize.INTEGER(),
            primaryKey: true,
            autoIncrement:false
        },
        imagem:{
            type: Sequelize.BLOB,
            allowNull: false
        }
        
    }
);

//modelProduto.sync({force:true});

module.exports = modelChat;