const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    // output dir
    callback(null, './server/imageChunk');
  },
  filename: function(req, file, callback) {
    const { fieldname, originalname } = file
    callback(
      null,
      fieldname + '-' + originalname.split('.')[0] + path.extname(file.originalname)
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

