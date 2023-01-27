const express = require('express')
const app = express()

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('root')
})
app.get('/banana', function (req, res) {
    res.send('yellow')
  })
app.get('/apple', function (req, res) {
    res.send('red')
  })
app.get('/orange', function (req, res) {
    res.send('orange')
  })

app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`)
})