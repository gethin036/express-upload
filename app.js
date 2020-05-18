const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


const router = require('./routers')
app.use(express.static('public'))
app.use(cors())
// app.use(upload.any())

app.use(bodyParser.urlencoded({
  extended: false // 为true时将使用qs库处理数据，通常不需要
}))


app.use(bodyParser.json())
router(app)

app.listen(3006, () => {
  console.log('the port is 3006')
})