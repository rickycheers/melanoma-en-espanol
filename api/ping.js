module.exports = (req, res) => {
  res.json({
    body: 'pong',
    query: req.query,
    cookies: req.cookies,
  })
}