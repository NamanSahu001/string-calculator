const express = require('express')
const router = express.Router()
const { add } = require('../controllers/calculatorController')

router.post('/add', (req, res) => {
  const { numbers } = req.body
  try {
    const result = add(numbers)
    res.json({ result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
