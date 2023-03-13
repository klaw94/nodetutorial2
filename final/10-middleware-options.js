const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

//use two functions.
//Or you can use it like I did in /items
//app.use([logger, authorize])


//morgan shows the time of response in the console. 
app.use(morgan('tiny'))

//Express provides some middleware functionality.
//It looks for public folder and makes them all available. 
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', [logger, authorize], (req, res) => {
  //I get the user from the authorise method.
  //Express connects everything. 
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
