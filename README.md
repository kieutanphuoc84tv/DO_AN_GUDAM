# Website Bán Mô Hình Gundam & Figure

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

Một dự án website thương mại điện tử chuyên cung cấp các mô hình Gundam (Gunpla) và Figure, được xây dựng bằng MERN stack.

## Mục lục

- [Tính năng chính](#tính-năng-chính)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cài đặt và Chạy dự án](#cài-đặt-và-chạy-dự-án)
- [Thiết kế API](#thiết-kế-api)
- [Thiết kế Giao diện](#thiết-kế-giao-diện)
- [Chức năng chi tiết](#chức-năng-chi-tiết)

## Tính năng chính

### Dành cho Quản trị viên (Admin)
- 📊 **Dashboard:** Biểu đồ doanh thu, thống kê tổng quan.
- 📦 **Quản lý Sản phẩm:** Thêm, sửa, xóa sản phẩm, upload hình ảnh.
- 🗂️ **Quản lý Danh mục:** CRUD cho các loại sản phẩm.
- 👥 **Quản lý Người dùng:** Xem danh sách và quản lý tài khoản người dùng.
- 🚚 **Quản lý Đơn hàng:** Xem và cập nhật trạng thái đơn hàng (đang xử lý, đã giao...).
- 🖼️ **Quản lý Giao diện:** Tùy chỉnh banner, slider trên trang chủ.
- 🏷️ **Quản lý Mã giảm giá:** Tạo và quản lý các chương trình khuyến mãi.
- 📉 **Báo cáo:** Xem sản phẩm sắp hết hàng, in hóa đơn PDF.

### Dành cho Người dùng (User)
- 🔐 **Xác thực:** Đăng ký, đăng nhập an toàn bằng JWT.
- 🛍️ **Trải nghiệm Mua sắm:**
    - Xem sản phẩm theo danh mục.
    - Tìm kiếm sản phẩm thông minh.
    - Lọc sản phẩm theo giá, hãng sản xuất (Bandai, Kotobukiya), cấp độ (HG, MG, RG, PG).
- 🛒 **Giỏ hàng:** Thêm, xóa, cập nhật số lượng sản phẩm.
- 💳 **Thanh toán:** Quy trình thanh toán đơn giản.
- 👤 **Hồ sơ cá nhân:**
    - Cập nhật thông tin cá nhân.
    - Xem lịch sử đơn hàng.
    - Theo dõi trạng thái đơn hàng real-time.
- ⭐ **Tương tác:** Đánh giá sản phẩm và đăng ảnh thực tế sau khi mua.
- 🚀 **Tính năng đặc biệt:**
    - Trang "Pre-order" cho các sản phẩm sắp ra mắt.
    - Trang "Blog/Review" để tăng tương tác và SEO.

## Công nghệ sử dụng

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT), Bcrypt
- **API Testing:** Postman

## Cài đặt và Chạy dự án

### Yêu cầu
- [Node.js](https://nodejs.org/en/) (phiên bản 14.x trở lên)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### Hướng dẫn cài đặt

1.  **Clone repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-folder>
    ```

2.  **Cài đặt Backend:**
    ```bash
    cd gundam-shop-backend
    npm install
    ```
    - Tạo file `.env` và cấu hình thông tin kết nối MongoDB, JWT Secret...

3.  **Cài đặt Frontend:**
    ```bash
    cd ../gundam-shop-frontend
    npm install
    ```

### Chạy ứng dụng

1.  **Khởi động Backend server:**
    ```bash
    # Trong thư mục gundam-shop-backend
    npm start
    ```
    Server sẽ chạy tại `http://localhost:5000` (hoặc cổng bạn cấu hình).

2.  **Khởi động Frontend server:**
    ```bash
    # Trong thư mục gundam-shop-frontend
    npm start
    ```
    Ứng dụng React sẽ mở tại `http://localhost:3000`.

---

<details>
<summary><strong>📝 Thiết kế API (Backend)</strong></summary>

### 1. Auth APIs
- `POST /auth/register` — đăng ký
- `POST /auth/login` — đăng nhập
- `GET /auth/me` — lấy thông tin cá nhân

### 2. Product APIs
- `GET /products` — lấy danh sách sản phẩm
- `GET /products/:id` — xem chi tiết
- `POST /products` — thêm sản phẩm (admin)
- `PUT /products/:id` — sửa sản phẩm (admin)
- `DELETE /products/:id` — xóa sản phẩm (admin)
- `GET /products/search?q=` — tìm kiếm
- `GET /products/filter?giá&số_lượng&loại` — lọc

### 3. Category APIs
- `GET /categories`
- `POST /categories`
- `PUT /categories/:id`
- `DELETE /categories/:id`

### 4. Cart APIs (User)
- `POST /cart/add`
- `GET /cart`
- `PUT /cart/update`
- `DELETE /cart/remove`

### 5. Order APIs
- `POST /orders` — tạo đơn hàng
- `GET /orders` — user xem lịch sử
- `GET /admin/orders` — admin xem tất cả đơn
- `PUT /admin/orders/:id` — cập nhật trạng thái (đã giao / đang xử lý)

### 6. Dashboard APIs (Admin)
- `GET /admin/statistics`
- `GET /admin/revenue?month=…`

</details>

<details>
<summary><strong>🎨 Thiết kế Giao diện (Frontend)</strong></summary>

### 1. Giao diện người dùng (User UI)
- Trang chủ (banner, danh mục, sp nổi bật)
- Trang danh sách sản phẩm
- Trang chi tiết sản phẩm
- Giỏ hàng
- Thanh toán (Checkout)
- Đăng ký – đăng nhập
- Hồ sơ cá nhân
- Lịch sử đơn hàng
- Trang “Pre-order” riêng (rất hot với Gundam)
- Trang “Blog / Tin tức / Review” (tăng SEO + giữ chân khách)

### 2. Giao diện quản trị (Admin UI)
- Dashboard (thống kê, doanh thu)
- Quản lý sản phẩm (CRUD)
- Quản lý danh mục
- Quản lý đơn hàng (cập nhật trạng thái)
- Quản lý người dùng
- Đăng nhập Admin
- Quản lý Banner / Slider
- Quản lý mã giảm giá
- Quản lý đánh giá (xóa review xấu)

</details>

<details>
<summary><strong>⚙️ Chức năng chi tiết</strong></summary>

### A. Chức năng cho Admin
- **Đăng nhập Admin**
- **Quản lý sản phẩm:**
    - Thêm
    - Sửa
    - Xóa
    - Upload hình ảnh
- **Quản lý danh mục**
- **Quản lý user**
- **Quản lý đơn hàng:**
    - Xem toàn bộ đơn
    - Cập nhật trạng thái
- **Dashboard:**
    - Biểu đồ doanh thu theo tháng
    - Tổng số đơn
    - Tổng số sản phẩm bán ra
- **Quản lý banner/slider/homepage**
- **Quản lý mã giảm giá**
- **Xem sản phẩm hết hàng / gần hết**
- **In hóa đơn PDF (khi giao hàng)**

### B. Chức năng cho Người dùng
- **Đăng ký – đăng nhập (JWT)**
- **Xem sản phẩm theo danh mục**
- **Tìm kiếm sản phẩm**
- **Lọc:**
    - theo giá
    - theo hãng (Bandai, Kotobukiya…)
    - theo loại (HG/MG/RG/PG)
- **Xem chi tiết sản phẩm**
- **Thêm vào giỏ hàng**
- **Tăng giảm số lượng**
- **Thanh toán**
- **Xem lịch sử đơn hàng**
- **Cập nhật thông tin cá nhân**
- **Đánh giá + đăng ảnh thực tế sau khi mua**
- **Theo dõi trạng thái đơn hàng real-time (có thông báo)**

</details>
