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
// app.get('/greeting/:name', (req, res) => {
//     const {name} = req.params
//     res.send(`Hello, ${name}`)
// })

//====tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const {total, tipPercentage} = req.params

    //Both Works -> Number or parseInt
    res.send('Tip: $'+ (Number(`${total}`)/Number(100))*Number(`${tipPercentage}`))
    // res.send('Tip: $'+ (parseInt(`${total}`)/parseInt(100))*parseInt(`${tipPercentage}`))
    //Need string to use res.send -> added 'Tip: $'

})

