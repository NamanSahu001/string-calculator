const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

const calculatorRoutes = require('./routes/calculatorRoutes')
app.use('/api/calculator', calculatorRoutes)
