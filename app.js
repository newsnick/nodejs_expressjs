const express = require('express')
const app = express()
//const logger = require('./final/logger')
//const authorize = require('./final/authorize')
const morgan = require('morgan')

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

app.use(morgan('tiny'))

//app.use([authorize, logger])

//app.use(express.static('./public'))

// api/home/about/products

app.get('/about', (req, res) => {
  res.send('Home')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening to port 5000')
})
