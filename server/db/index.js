const {db} = require('./db')
const {Company, Product, Offering} = require('./models/index')

const companyArray = [
    {name:'AcmeUser'}, 
    {name:'AcmeCompany'}, 
    {name:'Acme'}, 
    {name:'AcmeProduct'}
    ]
const productArray = [
    { 
    name:'foo',
    suggestedPrice: 3.00
    }, 
    {name:'boo',
    suggestedPrice:2.00
    }, 
    {name:'bazz',
    suggestedPrice:1.50}, 
    {name:'cook',
    suggestedPrice:2.50}
    ]

const seedDevData = async() => {
    const createdCompany  = await Promise.all((companyArray.map(company => Company.create(company))))
    const createdProduct = await Promise.all((productArray.map(product => Product.create(product))))
    const acme = await Company.findOne({
        where:{
            name:'Acme'
        }
    })
    await acme.addProducts(createdProduct)
}

const seed = async (force = false) => {
    try{
        await db.sync({force})
        if (force){
            await seedDevData()        }
        console.log(`server started force  = ${force}`)
    }
    catch(e){
        console.error(e)
    }
}

module.exports = {
    seed,
    db,
    models:{
        Company,
        Product,
        Offering
    }
}