const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
 
app.post('/usuario', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Usuario incluido.</h1>')
})

app.post('/usuario/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Usuario alterado.</h1>')
})
 
app.listen(3003)