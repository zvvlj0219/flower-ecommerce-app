const multer = require('multer')
const path = require('path')

const outputPath = process.env.NODE_ENV === 'production'
  ? './server/build/static/media'
  : './client/src/assets/product'

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    // output dir
    callback(null, outputPath);
  },
  filename: function(req, file, callback) {
    const { originalname } = file
    callback(
      null,
      originalname.split('.')[0] + path.extname(originalname)
    );
  }
});

// check req file is image
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

exports.upload = multer({
  storage,
  fileFilter
})

