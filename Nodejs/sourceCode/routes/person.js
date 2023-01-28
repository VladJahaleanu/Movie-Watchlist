const PersonModel = require('../models/person.model')
const express = require('express')
const verifyToken = require('./verifyToken')
const router = express.Router()

//Create new person
//POST
router.post('/person', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body missing!')
    }
    
    let model = new PersonModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//GET all persons only if logged in
router.get('/person', verifyToken, async (req, res) => {
    const allPersons = await PersonModel.find()

    res.send(allPersons)
  })

module.exports = router