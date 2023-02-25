const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCategoriaServico = connection.define(
    'cat_servico',
    {
        id_Categoria:{
            type: Sequelize.INT(),
            primaryKey: true,
            autoIncrement:true
        },
        desc_categoria:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
        
    }
);

//modelCategoria_Produto.sync({force:true});

module.exports = modelCategoriaServico;