const Book = require('../models/Book');

// Lấy tất cả sách
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

// Tạo sách mới
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Cập nhật sách
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Xóa sách
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Sách đã được xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};