const  Sequelize  = require('sequelize');
const banco = require('../banco/configBanco.js');

const Livro = banco.define('livro', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Livro;