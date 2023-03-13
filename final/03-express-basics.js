const express = require('express')
const app = express()
//const app = require('express')()

//this is the same as res.end
app.get('/',(req, res)=>{
  console.log("user get the resource.")
  res.status(200).send("send")
})

app.get('/about', (req, res)=>{
  console.log("user get the resource.")
  res.status(200).send("about")
})

//this is like the last else. If the page doesnt exist. 
app.all('*', (req, res)=>{
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, ()=>{
  console.log("hello")
})

//Methods that you can use:
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen