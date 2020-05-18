const express = require('express')
const multer = require('multer')
const router = express.Router()
const fs = require('fs');


const upload = multer({ dest: 'upload/' });
router.get('/', (req, res) => {
  res.status(200).send({
    code: '00',
    message: 'success'
  })
})

router.post('/', upload.single('file'), (req, res) => {
  // const { files } = req

  console.log(req.body)
  console.log(req.file)
  fs.rename(req.file.path, "upload/" + req.file.originalname, function(err) {
    if (err) {
        throw err;
    }
  });
  res.status(200).send('success')

  
})

module.exports = router