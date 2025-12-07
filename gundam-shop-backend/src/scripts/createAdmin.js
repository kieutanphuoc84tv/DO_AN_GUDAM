// scripts/createAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createAdmin = async () => {
    try {
        // Kết nối MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Đã kết nối MongoDB');

        // Thông tin admin
        const adminData = {
            name: 'Admin',
            email: 'admin@gundamshop.com',
            password: 'admin123'
        };

        // Kiểm tra xem admin đã tồn tại chưa
        let existingAdmin = await User.findOne({ email: adminData.email });
        if (existingAdmin) {
            console.log('⚠️  Tài khoản admin đã tồn tại!');
            console.log('📧 Email:', adminData.email);
            process.exit(0);
        }

        // Hash mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminData.password, salt);

        // Tạo admin mới với role admin
        const admin = new User({
            name: adminData.name,
            email: adminData.email,
            password: hashedPassword,
            role: 'admin'
        });

        await admin.save();

        console.log('✅ Tạo tài khoản admin thành công!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📧 Email:', adminData.email);
        console.log('🔑 Password:', adminData.password);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('💡 Sử dụng thông tin này để đăng nhập!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Lỗi:', error.message);
        process.exit(1);
    }
};

createAdmin();
