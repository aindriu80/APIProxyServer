const express = require('express')
const needle = require('needle')
const router = express.Router()

// Env variables
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

router.get('/', async (req, res) => {
  try {
    const apiRes = await needle('get', `${API_BASE_URL}`)
    const data = apiRes.body
  } catch (error) {
    res.status(500).json({ error })
  }

  res.status(200).json(data)
})

module.exports = router
