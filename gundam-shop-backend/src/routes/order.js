// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { auth, adminAuth } = require('../middleware/auth');

// @route   POST /api/orders
// @desc    Tạo đơn hàng mới
router.post('/', auth, async (req, res) => {
    try {
        const {
            orderItems,
            shippingInfo,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice
        } = req.body;

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({ msg: 'Giỏ hàng trống' });
        }

        // Tính ngày giao hàng dự kiến (3-5 ngày)
        const estimatedDelivery = new Date();
        estimatedDelivery.setDate(estimatedDelivery.getDate() + 4);

        const order = new Order({
            user: req.user.id,
            orderItems,
            shippingInfo,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice,
            estimatedDelivery,
            statusHistory: [{
                status: 'PENDING',
                note: 'Đơn hàng đã được tạo',
                updatedAt: new Date()
            }]
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Lỗi Server' });
    }
});

// @route   GET /api/orders/myorders
// @desc    Lấy đơn hàng của user đang đăng nhập
router.get('/myorders', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate('orderItems.product', 'name')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Lỗi Server' });
    }
});

// @route   GET /api/orders/:id
// @desc    Lấy chi tiết đơn hàng
router.get('/:id', auth, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email')
            .populate('orderItems.product', 'name brand');

        if (!order) {
            return res.status(404).json({ msg: 'Không tìm thấy đơn hàng' });
        }

        // Kiểm tra quyền: chỉ user sở hữu hoặc admin mới xem được
        if (order.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'Không có quyền truy cập' });
        }

        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Lỗi Server' });
    }
});

// @route   GET /api/orders
// @desc    Lấy tất cả đơn hàng (Admin only)
router.get('/', [auth, adminAuth], async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user', 'name email')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Lỗi Server' });
    }
});

// @route   PUT /api/orders/:id/status
// @desc    Cập nhật trạng thái đơn hàng (Admin only)
router.put('/:id/status', [auth, adminAuth], async (req, res) => {
    try {
        const { status, note } = req.body;
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ msg: 'Không tìm thấy đơn hàng' });
        }

        order.orderStatus = status;
        
        // Thêm vào lịch sử
        order.statusHistory.push({
            status,
            note: note || `Đơn hàng chuyển sang trạng thái ${status}`,
            updatedAt: new Date()
        });

        // Nếu đã giao hàng, cập nhật ngày giao
        if (status === 'DELIVERED') {
            order.deliveredAt = new Date();
            order.paymentStatus = 'PAID';
        }

        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Lỗi Server' });
    }
});

module.exports = router;
