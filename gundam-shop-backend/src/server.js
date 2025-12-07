// server.js
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

connectDB(); 

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:3000' })); 

// Serve static files (để truy cập ảnh upload)
app.use('/uploads', express.static('uploads'));

// Định tuyến (Routes)
app.get('/', (req, res) => {
    res.send('API của Gundam Shop đang hoạt động...');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upload', require('./routes/upload'));
app.use('/api/orders', require('./routes/order')); 

// Khởi động Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});