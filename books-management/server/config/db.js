// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // 🔥 Phải có dòng này nếu chưa được load ở đây

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL); // 🔍 Check tên biến
    console.log(`✅ Đã kết nối MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Lỗi kết nối MongoDB:', error.message);
    process.exit(1); // Thoát process nếu lỗi
  }
};

module.exports = connectDB;
