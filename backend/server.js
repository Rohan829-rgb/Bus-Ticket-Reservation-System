const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const busRoutes = require('./routes/busRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const db = require('./config/db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// ✅ Serve frontend from ../frontend/pages
app.use(express.static(path.join(__dirname, '../frontend/pages')));

// ✅ Optional: Default route redirects to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/pages/index.html'));
});

// ✅ Booking route (or move to controller)
app.post('/api/confirm-booking', (req, res) => {
  const { busName, from, to, date, seats, totalFare } = req.body;

  const query = `
    INSERT INTO bookings (bus_name, from_location, to_location, date, seats, total_fare)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [busName, from, to, date, seats, totalFare], (err, results) => {
    if (err) {
      console.error("❌ Error inserting booking:", err);
      return res.status(500).json({ error: "Failed to save booking" });
    }
    res.status(200).json({ message: "Booking confirmed!" });
  });
});

// ✅ Register routes
app.use('/api', busRoutes);
app.use('/api', authRoutes);
app.use('/api', bookingRoutes);

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
