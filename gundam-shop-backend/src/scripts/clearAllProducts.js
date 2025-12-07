// scripts/clearAllProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const clearAllProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Đã kết nối MongoDB');

        // Drop collection để xóa tất cả sản phẩm và indexes
        try {
            await Product.collection.drop();
            console.log('🗑️  Đã xóa tất cả sản phẩm thành công!');
        } catch (err) {
            console.log('ℹ️  Collection trống hoặc không tồn tại');
        }

        console.log('✅ Hoàn tất! Bạn có thể thêm sản phẩm mới qua Dashboard');
        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error.message);
        process.exit(1);
    }
};

clearAllProducts();
