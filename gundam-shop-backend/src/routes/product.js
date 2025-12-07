const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { auth, adminAuth } = require('../middleware/auth');

// @route   GET /api/products
// @desc    Lấy tất cả sản phẩm
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({ is_active: true });
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

// @route   GET /api/products/:id
// @desc    Lấy sản phẩm theo ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Sản phẩm không tồn tại' });
        }
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

// @route   POST /api/products
// @desc    Tạo sản phẩm mới (Chỉ admin)
router.post('/', [auth, adminAuth], async (req, res) => {
    const { name, brand, price, type, specs, images } = req.body;

    try {
        const newProduct = new Product({
            name,
            brand,
            price,
            type,
            specs,
            images
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

// @route   PUT /api/products/:id
// @desc    Cập nhật sản phẩm (Chỉ admin)
router.put('/:id', [auth, adminAuth], async (req, res) => {
    const { name, brand, price, type, specs, images, is_active } = req.body;

    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Sản phẩm không tồn tại' });
        }

        product.name = name || product.name;
        product.brand = brand || product.brand;
        product.price = price || product.price;
        product.type = type || product.type;
        product.specs = specs || product.specs;
        product.images = images || product.images;
        product.is_active = is_active !== undefined ? is_active : product.is_active;

        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

// @route   DELETE /api/products/:id
// @desc    Xóa sản phẩm (Chỉ admin)
router.delete('/:id', [auth, adminAuth], async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Sản phẩm không tồn tại' });
        }

        await Product.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Sản phẩm đã được xóa' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Lỗi Server');
    }
});

module.exports = router;