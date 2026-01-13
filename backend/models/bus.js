const db = require('../config/db');

const Bus = {
  // Get all buses
  getAllBuses: (callback) => {
    db.query('SELECT * FROM buses', callback);
  },

  // Add a new bus
  addBus: (bus, callback) => {
    const { busName, from, to, date, fare, seats } = bus;
    db.query(
      'INSERT INTO buses (bus_name, from_location, to_location, date, fare, seats) VALUES (?, ?, ?, ?, ?, ?)',
      [busName, from, to, date, fare, seats],
      callback
    );
  },

  // Update a bus
  updateBus: (id, bus, callback) => {
    const { busName, from, to, date, fare, seats } = bus;
    db.query(
      'UPDATE buses SET bus_name = ?, from_location = ?, to_location = ?, date = ?, fare = ?, seats = ? WHERE id = ?',
      [busName, from, to, date, fare, seats, id],
      callback
    );
  },

  // Delete a bus
  deleteBus: (id, callback) => {
    db.query('DELETE FROM buses WHERE id = ?', [id], callback);
  }
};

module.exports = Bus;
