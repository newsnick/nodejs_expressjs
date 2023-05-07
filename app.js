const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse form data

app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).send({ success: true, person: name })
})

app.post('./login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please provide credentials')
})

//const logger = require('./final/logger')
//const authorize = require('./final/authorize')
//const morgan = require('morgan')

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

//app.use(morgan('tiny'))

//app.use([authorize, logger])

//app.use(express.static('./public'))

// api/home/about/products

// app.get('/about', (req, res) => {
//   res.send('Home')
// })

// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })

// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

app.listen(5000, () => {
  console.log('Server is listening to port 5000')
})
