const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let number = 0

app.use( bodyParser.json() );
app.post('/increment', (req, res) => {
  number++
  res.send(`number after increment: ${number}`)
})
app.get('/number', (req, res) => {
  res.send(`number is: ${number}`)
})
app.post('/set-number', (req, res) => {
  number = req.body.number
  res.send(`number set to: ${number}`)
})
app.post('/decrement', (req, res) => {
  number--
  res.send(`number after decrement: ${number}`)
})

app.listen('1234', () => console.log('server is running: http://localhost:1234/'))