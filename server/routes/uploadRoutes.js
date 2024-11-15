import express from 'express';
import upload from '../multer.js';  // multer configuration to handle file uploads
import cloudinary from '../cloudinary.js';  // cloudinary configuration

const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads',  // optional folder name to organize images in Cloudinary
    });

    res.json({ imageUrl: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
  }
});

export default router;
