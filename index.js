const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('HThis is the about page!')
  })
app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})