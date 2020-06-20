const {Router} = require('express')
const { db, models } = require('../db/index.js')
const { app } = require('./index.js')

const apiRouter = Router()
Object.entries(db.models).forEach(([name, model])=> {
    apiRouter.get(`/${name}`, async (req,res,next) => {
    try{
        const elem = await model.findAll()
        res.send({
            [name]: elem
        });
    }catch(e){
        console.error('error', e)
    }
    })
})

module.exports = apiRouter