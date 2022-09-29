//load modules
const express = require('express')

//init express app
const app = express()
const PORT = 3000

//nodemon
//listen
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

//====greetings
app.get('/greeting/:name', (req, res) => {
    const {name} = req.params
    res.send(`Hello, ${name}`)
})
