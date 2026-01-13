const db = require('../config/db');

const Booking = {
  createBooking: (booking, callback) => {
    const { busName, from, to, date, seats, totalFare, timestamp } = booking;

    const sql = `
      INSERT INTO bookings (bus_name, from_location, to_location, date, seats, total_fare, timestamp)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [busName, from, to, date, seats, totalFare, timestamp], callback);
  },

  getBookings: (callback) => {
    db.query('SELECT * FROM bookings', callback);
  }
};

module.exports = Booking;
