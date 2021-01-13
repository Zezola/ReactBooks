const  Sequelize  = require('sequelize');
const database = require('../db');

const Livro = database.define('livro', {
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