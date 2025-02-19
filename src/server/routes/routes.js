const express = require('express')
const router = express.Router()
const path = require('path')

// Receber informações de logging
router.use((req, res, next) => {
    const data = new Date()
    console.log(`Method: ${req.method} | URL: ${req.url} | Date: ${data.getFullYear()}/${data.getMonth()+1}/${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}.${data.getMilliseconds()}`) // mostra um login no console com data e hora formatadas
    next() // passa para o próximo middleware
})

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html')) # enviar arquivo HTML
    res.send('Hello World')
    // Removido o next() pois sendFile já finaliza a resposta 
})

module.exports = router