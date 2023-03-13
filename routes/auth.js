const express = require('express')
const router = express.Router()

router.post('/', (req, res) =>{
    //We get now the name that we type in req.body. This is thanks to express.urlencoded. Without urlencoded we would get undefined.
    console.log(req.body)
    const {name} = req.body
    if(name){
      return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
  })

  module.exports = router