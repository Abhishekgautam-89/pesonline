const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name:{
        allowNull: false,
        type: Sequelize.STRING
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING
    }
})

module.exports=User;