# 🔐 Hướng Dẫn Phân Quyền User & Admin

## ✨ Đã Cập Nhật

### Phân Quyền Rõ Ràng
- **User thường (role: 'user')**: 
  - Đăng ký/đăng nhập
  - Xem sản phẩm
  - Đặt hàng (sẽ làm sau)
  - KHÔNG thấy nút Dashboard
  - KHÔNG vào được /dashboard

- **Admin (role: 'admin')**:
  - Đăng nhập
  - Thấy nút Dashboard trên Navbar
  - Vào được /dashboard để quản lý
  - Quản lý sản phẩm, đơn hàng

## 🚀 Cách Sử Dụng

### 1. Tạo Lại Admin (Quan Trọng!)
Admin cũ chưa có role, cần tạo lại:

```bash
cd gundam-shop-backend
node src/scripts/createAdmin.js
```

Nếu báo admin đã tồn tại, vào MongoDB xóa user `admin@gundamshop.com` rồi chạy lại.

### 2. Đăng Ký User Thường
- Vào http://localhost:3000/register
- Đăng ký tài khoản mới
- Tự động có role = 'user'
- Sau đăng ký, về trang chủ (không có Dashboard)

### 3. Đăng Nhập Admin
- Email: admin@gundamshop.com
- Password: admin123
- Sau đăng nhập, vào Dashboard

### 4. Đăng Nhập User
- Dùng email/password đã đăng ký
- Sau đăng nhập, về trang chủ
- Không thấy nút Dashboard

## 🔒 Bảo Mật

- ✅ Role được lưu trong database
- ✅ Role được trả về khi login/register
- ✅ Frontend check role trước khi hiển thị Dashboard
- ✅ Backend sẽ check role khi gọi API (làm sau)

## 📝 Lưu Ý

- User thường đăng ký sẽ tự động có role = 'user'
- Chỉ tạo admin qua script
- Nếu muốn đổi user thành admin, phải vào database sửa
