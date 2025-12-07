// middleware/auth.js
const jwt = require('jsonwebtoken');

// Middleware xác thực token
const auth = (req, res, next) => {
    // Lấy token từ header
    const token = req.header('x-auth-token');

    // Kiểm tra có token không
    if (!token) {
        return res.status(401).json({ msg: 'Không có token, truy cập bị từ chối' });
    }

    try {
        // Xác thực token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token không hợp lệ' });
    }
};

// Middleware kiểm tra admin
const adminAuth = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Truy cập bị từ chối. Chỉ admin mới có quyền.' });
    }
    next();
};

module.exports = { auth, adminAuth };
