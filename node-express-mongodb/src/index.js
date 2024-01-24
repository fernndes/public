const express = require('express')
const app = express()
const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require("./controllers/authController")(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})