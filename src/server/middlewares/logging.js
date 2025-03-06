// Receber informações de logging
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    const data = new Date()
    console.log(`Method: ${req.method} | URL: ${req.url} | Date: ${data.getFullYear()}/${data.getMonth()+1}/${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}.${data.getMilliseconds()}`) // mostra um login no console com data e hora formatadas
    next() // passa para o próximo middleware
})

module.exports = router