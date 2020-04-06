let express = require('express')

let  router = express.Router()

// Chama os arquivos das suas pastas
router.use('/', require('./postagens')) // vai mais pro fundo do /api, abre o arquivo postagens
router.use('/', require('./comentarios'))

module.exports = router