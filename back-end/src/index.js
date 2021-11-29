const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require("cors");
const multer = require('multer');
const app = express();
const port = 3000;
const route = require('./routes/index');
const errorMiddleware = require('./app/middleware/error.middleware');

app.use(cors());
app.options("*", cors());

// Connect database



// --- upload file ------
let tmpUrl = ""
let listImage = [];
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'src/public/uploads');
  },
  filename: (req, file, cb) => {
        tmpUrl = Date.now()+file.originalname;
        const { originalname } = file;
        cb(null, tmpUrl);
        listImage.push(`http://127.0.0.1:${port}/images/`+tmpUrl);
  },
})
const upload = multer({ storage });

app.post('/uploads', upload.array('images'), (req, res) => {
    let data = listImage;
    listImage = [];
  return res.json({ status: 'OK', data:data, message: `Upload ${data.length} file image`, success: true });
});



app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(morgan('combined'));
app.use('/images', express.static('src/public/uploads'))


// Error middleware
app.use(errorMiddleware);

// route Init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
