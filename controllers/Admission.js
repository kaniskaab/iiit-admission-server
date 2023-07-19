const express = require('express');
const router = express.Router();
const Admission = require('../models/Admission');

// Get all data entries
router.get('/admission', async (req, res) => {
  try {
    const data = await Admission.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

// Create a new data entry
router.post('/admission', async (req, res) => {
  try {
    const newData = new Admission(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create data entry' });
  }
});

// Edit an existing data entry
router.put('/admission/:id', async (req, res) => {
  try {
    const data = await Admission.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: 'Data entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update data entry' });
  }
});

router.delete('/admission/:id', async (req, res) => {
    try {
      const data = await Admission.findByIdAndRemove(req.params.id, req.body, { new: true });
    
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Data entry not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete' });
    }
  });
  
module.exports = router;
