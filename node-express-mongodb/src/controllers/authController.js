const express = require("express")
const jwt = require('jsonwebtoken')
const User = require("../app/models/user")

const router = express.Router()

function generateToken(params = {}) {
    return jwt.sign(params, process.env.JWT_SECRET, {
        expiresIn: 7200,
    })    
}

router.post("/register", async (req, res) => {
    const { email } = req.body

    try {
        if(await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists' })
        }

        const user = await User.create(req.body)

        return response.send({
            user,
            token: generateToken({ id: user.id })            
        })
    } catch (error) {
        return response.status(400).send({ error: "Registration failed" })
    }
})

router.post('/authenticate', async (request, response) => {
    const { email, password } = request.body 

    const user = await User.findOne({ email }).select('+password')

    if(!user)
        return response.status(400).send({ error: 'User not found' })

    if(!await bcrypt.compare(password, user.password))
        return response.status(400).send({ error: 'Invalid password' })

    user.password = undefined
    
    response.send({ 
        user,
        token: generateToken({ id: user.id }) })
})

module.exports = (app) => app.use("/auth", router)