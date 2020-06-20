const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const apiRouter = require('./route')

const startServer = new Promise((res)=> {
    app.listen(port , () => {
        console.log(`server now listening on ${port}`)
    })
    res()
})

module.exports = {
    startServer,
    app,
    apiRouter
}