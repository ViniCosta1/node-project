const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html')) # enviar arquivo HTML
    res.send('Hello World')
    // Removido o next() pois sendFile já finaliza a resposta 
})

router.post('/add', (req, res) => {
    res.send('Método POST')
})

module.exports = router