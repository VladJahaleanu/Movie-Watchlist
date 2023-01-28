const MovieModel = require('../models/movie.model')
const express = require('express')
const verifyToken = require('./verifyToken')
const router = express.Router()

//Create movie
//POST
router.post('/movie', async (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body missing!')
    }

    //Check if ID is unique
    const idExists = await MovieModel.findOne({id: req.body.id})
    if(idExists) return res.status(400).send('ID already exists!')

    //Create a movie to save to DB
    const movie = new MovieModel({
        name: req.body.name,
        duration: req.body.duration,
        directorName: req.body.directorName,
        id: req.body.id
    })

    //Save movie to DB
    try{
        const savedMovie = await movie.save()
        res.send(savedMovie)
    } catch (err) {
        res.status(400).send(err)
    }
})

//GET all movies
router.get('/movie', async(req, res) => {
    const allMovies = await MovieModel.find()

    res.send(allMovies)
})

//GET a single movie by ID
router.get('/movie/:id', async(req, res) => {
    const movie = await MovieModel.findOne({id: req.params.id})
    if(!movie)  return res.status(400).send('There is no movie with the specified ID!')

    res.send(movie)
})

//UPDATE a single movie by ID
router.put('/movie/:id', async (req, res) => {
    const filter = { id: req.params.id }
    const update = { name: req.body.name,
                     duration: req.body.duration }
    
    let newMovie = await MovieModel.findOneAndUpdate(filter, update, {new: true})

    res.send(newMovie)            
                
})

module.exports = router