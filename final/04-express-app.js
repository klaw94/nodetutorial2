const express = require('express')
const path = require( 'path')
const app = express()

//setup static and middleware
app.use(express.static('../navbar-app'))
//normally you just refer to ./public
//Much more effificent that 02-http-basics.js

// No longer need this if you have express.static()
//Basically you can serve all your files in the public and that is it. And you serve them.
// app.get('/', (req,res)=>{
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req,res)=>{
  res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000.....')
})