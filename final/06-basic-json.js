const express = require('express')
const app = express()
const {products} = require('../data')

app.get('/', (req, res)=>{
  res.send('<h1>Hola</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) =>{
  const newProducts = products.map((product)=>{
    const {id, name, image} =product
    return {id, name, image}
  })
  res.json(newProducts)
} )

//Basically :productID becomes a param.
app.get('/api/products/:productID', (req, res) =>{
  console.log(req.params)
  const singleProduct = products.find((product)=>product.id === parseInt(req.params.productID))

  if(!singleProduct){
    res.status(404).send('Product does not exist.')
  }

  res.json(singleProduct)
} )

app.get('/api/products/:productID/reviews/:reviewID', (req, res) =>{
  console.log(req.params)
  res.send('<h1>Reviews</h1>')
})

app.get('/api/v1/query', (req, res) =>{
  //a link like http://localhost:5000/api/v1/query?name=john&id=4 would return {name:john, id : 4} in req.query
  console.log(req.query)
  const {search, limit} = req.query
  let sortedProducts = [...products]

  if (search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if(sortedProducts.length < 1){
    //You always need return to avoid errors
    //res.status(200).send('no products matched your search')
   return res.status(200).json({success: true, data: []})
  }
  return res.status(200).json(sortedProducts)
  //res.send('<h1>Queries</h1>')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
