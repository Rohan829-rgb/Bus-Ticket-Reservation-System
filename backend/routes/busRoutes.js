const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

// Get all buses
router.get('/buses', busController.getAllBuses);

// Add a new bus
router.post('/addBus', busController.addBus);

// Update an existing bus
router.put('/buses/:id', busController.updateBus);

// Delete a bus
router.delete('/buses/:id', busController.deleteBus);

module.exports = router;
