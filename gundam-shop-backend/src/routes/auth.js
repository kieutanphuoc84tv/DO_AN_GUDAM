// src/routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import model User

// @route   POST /api/auth/register
// @desc    Đăng ký người dùng mới (Register)
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Kiểm tra người dùng đã tồn tại chưa
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Người dùng đã tồn tại.' });
        }

        user = new User({ name, email, password });

        // Hash mật khẩu (dùng Bcrypt)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Tạo và trả về JWT với role
        const payload = { 
            user: { 
                id: user.id,
                role: user.role 
            } 
        };
        
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token, role: user.role });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

// @route   POST /api/auth/login
// @desc    Đăng nhập người dùng (Login)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Thông tin đăng nhập không hợp lệ.' });
        }

        // So sánh mật khẩu (Bcrypt)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Thông tin đăng nhập không hợp lệ.' });
        }

        // Tạo và trả về JWT với role
        const payload = { 
            user: { 
                id: user.id,
                role: user.role 
            } 
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token, role: user.role });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

module.exports = router;