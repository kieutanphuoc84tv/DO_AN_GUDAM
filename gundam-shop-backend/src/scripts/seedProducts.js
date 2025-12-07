// scripts/seedProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
    {
        name: 'RX-78-2 Gundam',
        brand: 'Bandai',
        price: 450000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'RG',
            height: '12.5cm'
        },
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Barbatos Lupus',
        brand: 'Bandai',
        price: 550000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm'
        },
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Strike Freedom Gundam',
        brand: 'Bandai',
        price: 850000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm'
        },
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Unicorn Gundam',
        brand: 'Bandai',
        price: 950000,
        type: 'GUNDAM',
        specs: {
            scale: '1/60',
            grade: 'PG',
            height: '31cm'
        },
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Đã kết nối MongoDB');

        // Xóa sản phẩm cũ (tùy chọn)
        // await Product.deleteMany({});
        // console.log('🗑️  Đã xóa sản phẩm cũ');

        // Thêm sản phẩm mẫu
        await Product.insertMany(sampleProducts);
        console.log('✅ Đã thêm sản phẩm mẫu thành công!');
        console.log(`📦 Số lượng: ${sampleProducts.length} sản phẩm`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error.message);
        process.exit(1);
    }
};

seedProducts();
