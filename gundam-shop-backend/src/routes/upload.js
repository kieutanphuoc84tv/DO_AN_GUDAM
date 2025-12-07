// routes/upload.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { auth, adminAuth } = require('../middleware/auth');

// Cấu hình multer để lưu file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Thư mục lưu file
    },
    filename: function (req, file, cb) {
        // Tạo tên file unique: timestamp-originalname
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// Filter chỉ cho phép upload ảnh
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Chỉ cho phép upload file ảnh (jpeg, jpg, png, gif, webp)'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
    fileFilter: fileFilter
});

// @route   POST /api/upload
// @desc    Upload ảnh (Chỉ admin)
router.post('/', [auth, adminAuth], upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ msg: 'Vui lòng chọn file ảnh' });
        }

        // Trả về URL của ảnh
        const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
        res.json({ 
            success: true,
            imageUrl: imageUrl,
            filename: req.file.filename
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Lỗi khi upload ảnh' });
    }
});

module.exports = router;
