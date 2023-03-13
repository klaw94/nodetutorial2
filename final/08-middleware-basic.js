// middleware is very important in express
const express = require('express')
const app = express()

//req => middleware => res

//This is a function that I call in app.get. Express passes the parameters req, res and next without me doing anything.
//When you work with middleware YOU MUST SEND IT TO THE NEXT MIDDLEWARE, otherwise it spins. 
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url;
  const time = new Date().getFullYear()
  console.log(method, url, time)
  //you can send a res.sedn
  //res.send('Testing')
  //or you can do this, to terminate and pass your old response ('home"):
  next()
}

//functions like this logger are clonky. It is better to have then in separate files. 

app.get('/', logger, (req, res)=>{
  res.send('Home')
})

app.get('/about', (req, res)=>{
  res.send('About')
})


app.listen(5000, ()=>{
  console.log('Server is listening on port 5000.... ')
})