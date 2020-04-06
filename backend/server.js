let port = 4600

let express = require('express')

let app = express()

let bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({
    extended: false
}))

app.use(bodyparser.json())

app.use(express.static(__dirname + '/frontend'))


app.get("/", (req,res) => {
    res.send("Testando!")
})

const routes = require('./routes/server')

app.use('/api', routes)


app.listen(port, () => {
    console.log("Rodando!")
})