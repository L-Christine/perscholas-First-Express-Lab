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

//====tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const {total, tipPercentage} = req.params

    //Both Works -> Number or parseInt
    res.send('Tip: $'+ (Number(`${total}`)/Number(100))*Number(`${tipPercentage}`))
    // res.send('Tip: $'+ (parseInt(`${total}`)/parseInt(100))*parseInt(`${tipPercentage}`))
    //Need string to use res.send -> added 'Tip: $'

})

//====Magic 8 ball
const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
const randRes = answer[Math.floor(Math.random() * answer.length)] 

app.get('/magic/:question', (req,res) => {

    const {question} = req.params 
    res.send(`Question: ${question}? Answer: ${randRes}`)
})