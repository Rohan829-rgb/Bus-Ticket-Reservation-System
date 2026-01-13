const Bus = require('../models/bus');

// GET all buses
const getAllBuses = (req, res) => {
  Bus.getAllBuses((err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching buses' });
    res.status(200).json(results);
  });
};

// ADD a new bus
const addBus = (req, res) => {
  const { busName, from, to, date, fare, seats } = req.body;
  Bus.addBus({ busName, from, to, date, fare, seats }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error adding bus' });
    res.status(201).json({ message: 'Bus added successfully' });
  });
};

// UPDATE an existing bus
const updateBus = (req, res) => {
  const { id } = req.params;
  const { busName, from, to, date, fare, seats } = req.body;
  Bus.updateBus(id, { busName, from, to, date, fare, seats }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating bus' });
    res.status(200).json({ message: 'Bus updated successfully' });
  });
};

// DELETE a bus
const deleteBus = (req, res) => {
  const { id } = req.params;
  Bus.deleteBus(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting bus' });
    res.status(200).json({ message: 'Bus deleted successfully' });
  });
};

module.exports = {
  getAllBuses,
  addBus,
  updateBus,
  deleteBus
};
