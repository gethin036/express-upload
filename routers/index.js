const upload = require('./upload')


module.exports = (app) => {
  app.use('/upload', upload)
}