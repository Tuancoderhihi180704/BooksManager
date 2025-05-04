const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book');

// Hàm random ngày
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Tạo danh sách sách giả
const books = Array.from({ length: 50 }, (_, i) => ({
  title: `Đắc Nhân Tâm - Tập ${i + 1}`,
  author: `Dale Carnegie`,
  price: Math.floor(Math.random() * 100000) + 50000,
  description: `Sách self-help số ${i + 1}, rất hay và đáng đọc.`,
  publishedDate: randomDate(new Date(2000, 0, 1), new Date()),
  image: './uploads/Dacnhantam.jpg' // hoặc dùng link ảnh nếu có Cloudinary
}));

// Kết nối và chèn dữ liệu
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("✅ Đã kết nối MongoDB");

  await Book.deleteMany(); // Xóa dữ liệu cũ (nếu có)
  await Book.insertMany(books);
  console.log("🎉 Đã chèn thành công 50 quyển sách!");

  mongoose.disconnect();
})
.catch(err => {
  console.error("❌ Lỗi kết nối MongoDB:", err);
});
