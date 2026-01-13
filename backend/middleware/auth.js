const authMiddleware = (req, res, next) => {
 const user = req.headers.user; // Simplified check, you may use JWT or session-based 
auth
 if (!user) {
 return res.status(403).json({ message: 'Access denied' });
 }
 next();
};
module.exports = authMiddleware;