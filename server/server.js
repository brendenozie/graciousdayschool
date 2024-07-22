const express = require('express');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const app = express();
const port = 5000;
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file



const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3000/',
  'http://localhost:5000',
  'http://localhost:5000/', // Development
  'https://graciousdayschool.vercel.app/' // Production
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};


// Apply CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // Initialize upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // Limit file size to 1MB
// }).single('image');

// // Make the public folder accessible
// app.use('/public', express.static(path.join(__dirname, 'public')));


// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/home', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});


// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(400).send({ message: err.message });
//     }
//     res.send({ message: 'File uploaded successfully', filePath: `/public/uploads/${req.file.filename}` });
//   });
// });

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


// All other GET requests not handled before will return the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
