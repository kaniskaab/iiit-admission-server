const express = require('express');
const router = express.Router();
const Notice = require('../models/Notices');

// Get all notices
router.get('/notices', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notices' });
  }
});

// Create a new notice
router.post('/notices', async (req, res) => {
  try {
    const newNotice = new Notice(req.body);
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create notice' });
  }
});

// Update an existing notice
router.put('/notices/:id', async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (notice) {
      res.json(notice);
    } else {
      res.status(404).json({ error: 'Notice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update notice' });
  }
});

// Delete a notice
router.delete('/notices/:id', async (req, res) => {
  try {
    const notice = await Notice.findByIdAndRemove(req.params.id);
    if (notice) {
      res.json(notice);
    } else {
      res.status(404).json({ error: 'Notice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete notice' });
  }
});

module.exports = router;
