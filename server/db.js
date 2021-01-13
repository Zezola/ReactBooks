const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', '123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;