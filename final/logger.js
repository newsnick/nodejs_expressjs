const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

//app.use([logger, authorize])

// api/home/about/products

app.get('/', logger, (req, res) => {
  res.send('Home')
})

app.get('/about', logger, (req, res) => {
  res.send('Home')
})

app.get('/api/products', logger, (req, res) => {
  res.send('Products')
})

app.get('/api/items', logger, (req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening to port 5000')
})
