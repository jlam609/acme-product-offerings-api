const {app, startServer, apiRouter} = require('./api/index.js')
const {seed, models}  = require('./db/index')
const {Company, Product, Offering} = models
const express = require('express')
const path = require('path')


app.use(express.static(path.join(__dirname, '../src')))
app.use('/api', apiRouter)

seed(force = true)
.then(startServer)
.then(()=> {
    console.log('server started')
})
.catch(e => console.error('error', e))