const Product = require('./product')
const Offering = require('./offering')
const Company = require('./company')

Product.belongsToMany(Company, {through: Offering})
Company.belongsToMany(Product, {through: Offering})

module.exports = {
    Product,
    Offering,
    Company,
}