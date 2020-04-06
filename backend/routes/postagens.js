const express = require('express')

const router = express.Router()


router.get('/postagens', (req,res) => {
         res.json({
             titulo: 'post',
             conteudo: 'ola'
         })  // localhost:4006/api/postagens
})

module.exports = router