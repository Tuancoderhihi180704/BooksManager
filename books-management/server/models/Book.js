// server/models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Vui lòng nhập tên sách'],
    trim: true,
    maxlength: [200, 'Tên sách không quá 200 ký tự']
  },
  author: {
    type: String,
    required: [true, 'Vui lòng nhập tên tác giả']
  },
  price: {
    type: Number,
    required: [true, 'Vui lòng nhập giá sách'],
    min: [0, 'Giá sách không được âm']
  },
  description: {
    type: String,
    maxlength: [500, 'Mô tả không quá 500 ký tự']
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    default: 'uploads/default.jpg'
  }
}, {
  timestamps: true // Tự động thêm createdAt và updatedAt
});

module.exports = mongoose.model('Book', bookSchema);