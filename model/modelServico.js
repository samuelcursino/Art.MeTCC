const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelServico = connection.define(
    'tbl_servico',
    {
        id_Produto:{
            type: Sequelize.INTEGER(20),
            primaryKey: true,
            autoIncrement:true
        },
        desc_servico:{
            type: Sequelize.STRING(45),
            allowNull: false
        }
        
    }
);

//modelProduto.sync({force:true});

module.exports = modelServico;