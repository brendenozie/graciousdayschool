const express = require('express');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const app = express();
const port = 5000;

// Apply CORS middleware
app.use(cors());

const CLOUDNAME= process.env.CLOUDNAME;
const CLOUDAPIKEY= process.env.CLOUDAPIKEY;
const CLOUDSECRET= process.env.CLOUDSECRET;

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'djjpfyknl',
  api_key: '164584725883366',
  api_secret: 'aSs_JB88IgRKKbe-Mpwl2xKIDI8'
});

// Set storage engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
}).single('image');

// Make the public folder accessible
app.use('/public', express.static(path.join(__dirname, 'public')));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: err.message });
    }
    res.send({ message: 'File uploaded successfully', filePath: `/public/uploads/${req.file.filename}` });
  });
});

// Endpoint to get list of uploaded images
app.get('/images', async (req, res) => {
  try {
    const { resources } = await cloudinary.api.resources({
      type: 'upload',
      //prefix: 'school/', // Optional: Specify folder name if you organize your images in folders
      max_results: 30 // Adjust as needed
    });
    res.send(resources);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
