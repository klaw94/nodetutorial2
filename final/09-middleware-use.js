const express = require('express')
const app = express()
const logger = require('./logger')

//Order matters

//You add the function logger to all the app.get()
//The first argumnet is optional. For example, here I add the logger function only to the url that have /api
//Without path it applies to all the resquests
app.use('/api', logger)

app.get('/',  (req, res)=>{
  res.send('Home')
})

app.get('/about',  (req, res)=>{
  res.send('About')
})

app.get('/api/products', (req, res)=>{
  res.send('product')
})

app.get('/api/items', (req, res)=>{
  res.send('items')
})


app.listen(5000, ()=>{
  console.log('Server is listening on port 5000.... ')
})