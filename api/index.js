const express = require('express')

const app = express()
app.use(express.json())

app.post('/api/ping', function(req, res) {
  res
    .status(200)
    .json({
      body: 'pong',
      query: req.query,
      cookies: req.cookies,
    })
    .end()
})

module.exports = app
