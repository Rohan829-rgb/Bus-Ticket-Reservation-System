const Booking = require('../models/booking');

// Create a booking
const createBooking = (req, res) => {
  const { busName, from, to, date, seats, totalFare, timestamp } = req.body;
  Booking.createBooking({ busName, from, to, date, seats, totalFare, timestamp }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating booking' });
    res.status(201).json({ message: 'Booking created successfully' });
  });
};

// Get all bookings
const getBookings = (req, res) => {
  Booking.getBookings((err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching bookings' });
    res.status(200).json(results);
  });
};

module.exports = { createBooking, getBookings };
