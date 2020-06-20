const {db} = require('../db')
const {UUID, UUIDV4, STRING, DECIMAL} = require('sequelize')

const Offering = db.define('offering', {
    price:{
        type:DECIMAL,
        defaultValue:1.00
    }
})

module.exports = Offering