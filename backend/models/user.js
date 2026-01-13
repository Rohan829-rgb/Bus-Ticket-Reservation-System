const db = require('../config/db');
const User = {
 register: (user, callback) => {
 const { name, email, password } = user;
 db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, 
password], callback);
 },
 login: (email, callback) => {
 db.query('SELECT * FROM users WHERE email = ?', [email], callback);
 }
};
module.exports = User;