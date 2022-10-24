require ('dotenv').config()
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const Vegetable = require('./models/vegetable')

const app = express()

app.use(express.urlencoded({ extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connected to MongoDB Atlas')
})

// Index
app.get('/vegetables', (req,res) => {
    Vegetable.find({}, (err, foundVegetables) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('vegetables/Index', {
                vegetables: foundVegetables
            })
        }
    })
})


// New
app.get('/vegetables/new', (req,res) => {
    res.render('vegetables/New')
})

// Delete
// Update
// Create
app.post('/vegetables', (req, res) => {
    req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
    Vegetable.create(req.body, (err, createdVegetable) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/vegetables/${createdVegetable._id}`)
        }
    })
})
// Edit
// Show
app.get('/vegetables/:id', (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('vegetables/Show', {
                vegetable: foundVegetable
            })
        }
    })
})






app.listen(3000, () => {
    console.log('Listening on Port 3000')
})