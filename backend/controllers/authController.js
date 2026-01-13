const User = require('../models/user');
// User Registration
const register = (req, res) => {
 const { name, email, password } = req.body;
 User.register({ name, email, password }, (err, result) => {
 if (err) {
 return res.status(500).json({ message: 'Registration failed' });
 }
 res.status(201).json({ message: 'User registered successfully' });
 });
};
// User Login
const login = (req, res) => {
 const { email, password } = req.body;
 User.login(email, (err, results) => {
	 if (err || results.length === 0) {
 return res.status(400).json({ message: 'Invalid credentials' });
 }
 const user = results[0];
 if (user.password !== password) {
 return res.status(400).json({ message: 'Invalid credentials' });
 }
 res.status(200).json({ message: 'Login successful', user });
 });
};
module.exports = { register, login };