// src/config/db.js
const mongoose = require('mongoose');

// Dòng này chỉ cần thiết nếu bạn không gọi dotenv.config() trong server.js
// require('dotenv').config(); 

const connectDB = async () => {
  try {
    // Lấy đường dẫn từ file .env
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    // Thoát chương trình nếu kết nối thất bại
    process.exit(1);
  }
};

module.exports = connectDB;