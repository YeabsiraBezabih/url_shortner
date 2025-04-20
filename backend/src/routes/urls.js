import express from 'express';
import jwt from 'jsonwebtoken';
import Url from '../models/Url.js';

const router = express.Router();

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Create a new shortened URL
router.post('/', authenticate, async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const url = new Url({
      originalUrl,
      userId: req.userId,
    });
    await url.save();

    res.status(201).json({
      id: url._id,
      originalUrl: url.originalUrl,
      shortUrl: `${process.env.BASE_URL || 'http://localhost:5000'}/${url.shortUrl}`,
      clicks: url.clicks,
      createdAt: url.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating URL' });
  }
});

// Get all URLs for the current user
router.get('/', authenticate, async (req, res) => {
  try {
    const urls = await Url.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(urls.map(url => ({
      id: url._id,
      originalUrl: url.originalUrl,
      shortUrl: `${process.env.BASE_URL || 'http://localhost:5000'}/${url.shortUrl}`,
      clicks: url.clicks,
      createdAt: url.createdAt,
    })));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching URLs' });
  }
});

// Delete a URL
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const url = await Url.findOne({ _id: req.params.id, userId: req.userId });
    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    await url.deleteOne();
    res.json({ message: 'URL deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting URL' });
  }
});

// Redirect to original URL
router.get('/:shortUrl', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Error redirecting' });
  }
});

export default router; 