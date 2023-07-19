const express = require('express');
const router = express.Router();
const Resource = require('../models/Resources');

// Get all resources
router.get('/resources', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve resources' });
  }
});

// Create a new resource
router.post('/resources', async (req, res) => {
  try {
    const newResource = new Resource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create resource' });
  }
});

// Update an existing resource
router.put('/resources/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update resource' });
  }
});

// Delete a resource
router.delete('/resources/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndRemove(req.params.id);
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete resource' });
  }
});

module.exports = router;
