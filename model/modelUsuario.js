const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelUsuario = connection.define(
    'tbl_usuario',
    {
        nome:{
            type: Sequelize.STRING(50),
            primaryKey: true,
            autoIncrement:false
        },
        uf:{
            type: Sequelize.STRING(2),
            allowNull: false
        },
        telefone:{
            type: Sequelize.STRING(14),
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        senha:{
            type: Sequelize.STRING(20),
            allowNull: false
        },
        
    }
);

//modelProduto.sync({force:true});

module.exports = modelUsuario;