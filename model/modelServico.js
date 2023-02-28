const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelServico = connection.define(
    'tbl_servico',
    {
        id_servico:{
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

//modelServico.sync({force:true});

module.exports = modelServico;