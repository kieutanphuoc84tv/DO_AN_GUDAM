const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  // 1. Thông tin cơ bản
  name: { type: String, required: true, trim: true }, // Tên (VD: MG Barbatos)
  slug: { type: String, lowercase: true }, // URL (mg-barbatos)
  brand: { type: String, required: true }, // Hãng (Bandai, GoodSmile...)
  
  // 2. Giá & Kho
  price: { type: Number, required: true }, // Giá bán
  original_price: { type: Number }, // Giá gốc (để hiện giảm giá)
  stock: { type: Number, default: 0 }, // Số lượng tồn kho

  // 3. Phân loại (Quan trọng để lọc)
  type: { 
    type: String, 
    enum: ['GUNDAM', 'FIGURE', 'TOOL', 'OTHER'], 
    required: true 
  },
  
  // 4. Đặc thù cho Gundam/Figure (Lưu dạng Object để linh hoạt)
  specs: {
    scale: String,       // Tỷ lệ (1/144, 1/100...)
    grade: String,       // Cấp độ (HG, RG, MG...)
    series: String,      // Phim (Gundam Seed, One Piece...)
    height: String,      // Chiều cao (cho Figure)
    material: String,    // Chất liệu (PVC, ABS...)
    origin: String,      // Xuất xứ (Japan, China...)
    weight: String,      // Trọng lượng
    releaseDate: String  // Ngày phát hành
  },

  // 4.5. Mô tả chi tiết
  description: { type: String },

  // 5. Hình ảnh
  images: [{ type: String }], // Mảng chứa link ảnh

  // 6. Trạng thái
  is_active: { type: Boolean, default: true }, // Đang bán hay ẩn
  
}, { timestamps: true }); // Tự động lưu ngày tạo/ngày sửa

module.exports = mongoose.model('Product', ProductSchema);