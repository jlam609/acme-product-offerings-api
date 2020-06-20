const {db} = require('../db')
const {UUID, UUIDV4, STRING, DECIMAL} = require('sequelize')

const Product = db.define('product', {
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
    suggestedPrice:{
        type:DECIMAL,
        allowNull:false
    }
})

module.exports = Product