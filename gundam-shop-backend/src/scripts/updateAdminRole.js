// scripts/updateAdminRole.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const updateAdminRole = async () => {
    try {
        // Kết nối MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Đã kết nối MongoDB');

        // Tìm và cập nhật admin
        const admin = await User.findOne({ email: 'admin@gundamshop.com' });
        
        if (!admin) {
            console.log('❌ Không tìm thấy admin!');
            console.log('💡 Chạy: node src/scripts/createAdmin.js để tạo admin mới');
            process.exit(0);
        }

        // Cập nhật role
        admin.role = 'admin';
        await admin.save();

        console.log('✅ Đã cập nhật role admin thành công!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📧 Email:', admin.email);
        console.log('👤 Role:', admin.role);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('💡 Bây giờ đăng xuất và đăng nhập lại!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error.message);
        process.exit(1);
    }
};

updateAdminRole();
