let express = require('express')

let router = express.Router()


router.get('/comentarios/:postId', (req,res) => {
         res.json({
             conteudo: "Qualquer coisa",
             autor: "gabriel"
         })
})

module.exports = router