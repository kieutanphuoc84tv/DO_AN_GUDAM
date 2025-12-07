# 🔐 Tài Khoản Admin - Gundam Shop

## Thông Tin Đăng Nhập

```
📧 Email: admin@gundamshop.com
🔑 Password: admin123
```

## Cách Sử Dụng

1. Mở web: http://localhost:3000
2. Click vào "Đăng Nhập (Admin)" trên Navbar
3. Nhập email và password ở trên
4. Sau khi đăng nhập, bạn sẽ vào trang Dashboard

## Tạo Thêm Admin Mới

Nếu muốn tạo thêm tài khoản admin:

```bash
node src/scripts/createAdmin.js
```

Hoặc chỉnh sửa file `src/scripts/createAdmin.js` để thay đổi thông tin admin.

## Lưu Ý

- Mật khẩu đã được hash bằng bcrypt
- Token JWT có thời hạn 1 giờ
- Sau khi logout, token sẽ bị xóa khỏi localStorage
