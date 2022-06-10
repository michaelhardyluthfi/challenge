const path = require('path')
const express = require('express');
const router = require('./router')
const orderList = require('./orders.json') 
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('Welcome to BingleShop'));
app.get('/users', (req, res) => res.json([{ nama: "Michael", ttl: "01-01-01", gender: "laki-laki"}]))
app.get('/items', (req, res) => {
    res.json([
        "Apple",
        "Xiaomi",
        "Oppo",
        "Samsung"
    ])
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', (req, res) => {
    const { email, password } = req.body
    res.json([email, password])
})

app.get('/api/v1/orders', (req, res) => res.status(200).json(orderList))

app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))
