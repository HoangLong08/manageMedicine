const multer = require('multer');
const asyncWrapper = require('../middleware/async')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '../public/uploads')
  },
  filename: (req, file, cb) => {
      const { originalname } = file;
      console.log(originalname)
      cb(null, originalname);
  }
})
const upload = multer({ storage });

const uploadImage = asyncWrapper(async (req, res) => {
  upload.single('avatar')
  return res.json({ status: 'OK', message: "Success" });
});

module.exports = uploadImage