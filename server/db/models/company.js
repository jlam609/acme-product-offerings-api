const {db} = require('../db')
const {UUID, UUIDV4, STRING, DECIMAL} = require('sequelize')

const Company = db.define('company', {
    id:{
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name:{
        type:STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = Company