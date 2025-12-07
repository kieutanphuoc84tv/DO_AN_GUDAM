// scripts/seed30Products.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const gundamProducts = [
    {
        name: 'RX-78-2 Gundam',
        brand: 'Bandai',
        price: 450000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'RG',
            height: '12.5cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Mobile Suit Gundam'
        },
        description: 'Mô hình Gundam huyền thoại đầu tiên với chi tiết tuyệt đẹp',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
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
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED Destiny'
        },
        description: 'Gundam với cánh thiên thần và vũ khí mạnh mẽ',
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
            height: '31cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam UC'
        },
        description: 'Perfect Grade với LED và chi tiết hoàn hảo',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
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
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam chiến đấu cận chiến mạnh mẽ',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Wing Gundam Zero EW',
        brand: 'Bandai',
        price: 750000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam Wing'
        },
        description: 'Gundam với đôi cánh thiên thần trắng',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Exia',
        brand: 'Bandai',
        price: 680000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam 00'
        },
        description: 'Gundam chiến đấu cận chiến với 7 thanh kiếm',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Astray Red Frame',
        brand: 'Bandai',
        price: 720000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED Astray'
        },
        description: 'Gundam màu đỏ với thanh kiếm khổng lồ',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Deathscythe Hell',
        brand: 'Bandai',
        price: 690000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam Wing'
        },
        description: 'Gundam tử thần với cánh dơi đen',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Epyon',
        brand: 'Bandai',
        price: 710000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam Wing'
        },
        description: 'Gundam rồng đỏ với roi năng lượng',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Destiny',
        brand: 'Bandai',
        price: 780000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED Destiny'
        },
        description: 'Gundam với cánh ánh sáng và vũ khí mạnh',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Banshee',
        brand: 'Bandai',
        price: 820000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam UC'
        },
        description: 'Gundam kỳ lân đen với sừng vàng',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Vidar',
        brand: 'Bandai',
        price: 580000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam bí ẩn với giáp tím',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Kimaris Vidar',
        brand: 'Bandai',
        price: 620000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam kỵ sĩ với giáo dài',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Bael',
        brand: 'Bandai',
        price: 590000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam huyền thoại đầu tiên của Gjallarhorn',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Aerial',
        brand: 'Bandai',
        price: 650000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Witch from Mercury'
        },
        description: 'Gundam mới nhất với công nghệ GUND',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Calibarn',
        brand: 'Bandai',
        price: 680000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Witch from Mercury'
        },
        description: 'Gundam cuối cùng với sức mạnh tối thượng',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Schwarzette',
        brand: 'Bandai',
        price: 670000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Witch from Mercury'
        },
        description: 'Gundam đen với vũ khí mạnh mẽ',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Barbatos',
        brand: 'Bandai',
        price: 520000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam chiến binh với búa tạ khổng lồ',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Gusion Rebake',
        brand: 'Bandai',
        price: 560000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam hỏa lực với súng máy hạng nặng',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Flauros',
        brand: 'Bandai',
        price: 570000,
        type: 'GUNDAM',
        specs: {
            scale: '1/144',
            grade: 'HG',
            height: '13cm',
            material: 'PS Plastic',
            origin: 'Japan',
            series: 'Iron-Blooded Orphans'
        },
        description: 'Gundam bắn tỉa với súng trường mạnh',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam 00 Raiser',
        brand: 'Bandai',
        price: 790000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam 00'
        },
        description: 'Gundam với hệ thống Trans-Am',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Dynames',
        brand: 'Bandai',
        price: 660000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam 00'
        },
        description: 'Gundam bắn tỉa chuyên nghiệp',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Kyrios',
        brand: 'Bandai',
        price: 670000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam 00'
        },
        description: 'Gundam biến hình thành máy bay',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Virtue',
        brand: 'Bandai',
        price: 700000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam 00'
        },
        description: 'Gundam hỏa lực hạng nặng với giáp dày',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Justice',
        brand: 'Bandai',
        price: 730000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED'
        },
        description: 'Gundam công lý với bộ bay Fatum',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Providence',
        brand: 'Bandai',
        price: 760000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED'
        },
        description: 'Gundam với hệ thống DRAGOON',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Aegis',
        brand: 'Bandai',
        price: 640000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED'
        },
        description: 'Gundam biến hình thành MA',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Blitz',
        brand: 'Bandai',
        price: 630000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED'
        },
        description: 'Gundam tàng hình với Mirage Colloid',
        images: ['https://images.unsplash.com/photo-1606041011872-596597976b25?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Duel',
        brand: 'Bandai',
        price: 620000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED'
        },
        description: 'Gundam chiến đấu đa năng',
        images: ['https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500'],
        is_active: true
    },
    {
        name: 'Gundam Buster',
        brand: 'Bandai',
        price: 640000,
        type: 'GUNDAM',
        specs: {
            scale: '1/100',
            grade: 'MG',
            height: '18cm',
            material: 'ABS, PS',
            origin: 'Japan',
            series: 'Gundam SEED'
        },
        description: 'Gundam hỏa lực tầm xa',
        images: ['https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500'],
        is_active: true
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Đã kết nối MongoDB');

        // Xóa sản phẩm cũ
        await Product.deleteMany({});
        console.log('🗑️  Đã xóa sản phẩm cũ');

        // Thêm 30 sản phẩm mới
        await Product.insertMany(gundamProducts);
        console.log('✅ Đã thêm 30 sản phẩm Gundam thành công!');
        console.log(`📦 Tổng số: ${gundamProducts.length} sản phẩm`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error.message);
        process.exit(1);
    }
};

seedProducts();
