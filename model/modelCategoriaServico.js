const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCategoriaServico = connection.define(
    'cat_servico',
    {
        id_Categoria:{
            type: Sequelize.INTEGER(),
            primaryKey: true,
            autoIncrement:true
        },
        desc_categoria:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
        
    }
);

//modelCategoriaServico.sync({force:true});

module.exports = modelCategoriaServico;