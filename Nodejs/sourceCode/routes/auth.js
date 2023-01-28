const UserModel = require('../models/user.model')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation')
const router = express.Router()

//REGISTER
router.post('/register', async (req, res) => {
    //Validate the data
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Check if user already exists
    const userNameExists = await UserModel.findOne({userName: req.body.userName})
    if(userNameExists) return res.status(400).send('Username already exists!')
    const emailExists = await UserModel.findOne({email: req.body.email})
    if(emailExists) return res.status(400).send('Email already exists!')

    //Hash pwd
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Create new user
    const user = new UserModel ({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword
    })

    //Return response
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
    }

})

//LOGIN
router.post('/login', async (req, res) => {
    //Validate the data
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Check if email exists
    const user = await UserModel.findOne({userName: req.body.userName})
    if(!user) return res.status(400).send(`Username is wrong!`)

    //Check if pwd is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send(`Password is wrong!`)

    //Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

module.exports = router