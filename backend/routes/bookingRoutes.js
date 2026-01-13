const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/createBooking', bookingController.createBooking);

// Get all bookings
router.get('/getBookings', bookingController.getBookings);

module.exports = router;
