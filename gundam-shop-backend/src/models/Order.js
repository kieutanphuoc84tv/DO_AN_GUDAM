// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    // Thông tin khách hàng
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    // Thông tin giao hàng
    shippingInfo: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String },
        notes: { type: String }
    },

    // Sản phẩm trong đơn hàng
    orderItems: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
        image: { type: String }
    }],

    // Thanh toán
    paymentMethod: {
        type: String,
        enum: ['COD', 'VISA', 'MASTERCARD'],
        default: 'COD',
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['PENDING', 'PAID', 'FAILED'],
        default: 'PENDING'
    },

    // Giá
    itemsPrice: { type: Number, required: true, default: 0 },
    shippingPrice: { type: Number, required: true, default: 30000 },
    totalPrice: { type: Number, required: true, default: 0 },

    // Trạng thái đơn hàng
    orderStatus: {
        type: String,
        enum: ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPING', 'DELIVERED', 'CANCELLED'],
        default: 'PENDING'
    },

    // Lịch sử trạng thái
    statusHistory: [{
        status: String,
        note: String,
        updatedAt: { type: Date, default: Date.now }
    }],

    // Ngày giao hàng dự kiến
    estimatedDelivery: { type: Date },
    
    // Ngày giao hàng thực tế
    deliveredAt: { type: Date }

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
