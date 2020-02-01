const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, + Date.now() + file.originalname)
    }
  })
  
  exports.upload = multer({ storage: storage })

//   exports.upload;