
// const express = require("express");
// const router = express.Router();
// const Book = require("../models/Book");


// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.find(); 
//     res.json(books);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
// server/routes/bookRoutes.js
// server/routes/bookRoutes.js
// import express from 'express';
// import Book from '../models/Book.js';

// const router = express.Router();

// // Lấy danh sách sách với phân trang và tìm kiếm
// router.get('/', async (req, res) => {
//   try {
//     const { page = 1, limit = 10, search = '' } = req.query;
//     const skip = (page - 1) * limit;
    
//     const query = {};
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { author: { $regex: search, $options: 'i' } }
//       ];
//     }
    
//     const [books, total] = await Promise.all([
//       Book.find(query).skip(skip).limit(limit),
//       Book.countDocuments(query)
//     ]);
    
//     res.json({
//       books,
//       totalPages: Math.ceil(total / limit),
//       currentPage: parseInt(page)
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Thêm sách mới
// router.post('/', async (req, res) => {
//   try {
//     const book = new Book(req.body);
//     const newBook = await book.save();
//     res.status(201).json(newBook);
//   } catch (err) {
//     res.status(400).json({ 
//       message: err.message || 'Lỗi khi thêm sách mới'
//     });
//   }
// });
// // Cập nhật sách
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedBook = await Book.findByIdAndUpdate(id, req.body, { 
//       new: true,
//       runValidators: true // Đảm bảo validate dữ liệu khi update
//     });
    
//     if (!updatedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }
    
//     res.json(updatedBook);
//   } catch (err) {
//     res.status(400).json({ 
//       message: err.message || 'Lỗi khi cập nhật sách'
//     });
//   }
// });

// // Xóa sách
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBook = await Book.findByIdAndDelete(id);
    
//     if (!deletedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }
    
//     res.json({ 
//       message: 'Đã xóa sách thành công',
//       deletedBookId: id
//     });
//   } catch (err) {
//     res.status(500).json({ 
//       message: err.message || 'Lỗi khi xóa sách'
//     });
//   }
// });

// export default router;





// import express from 'express';
// import Book from '../models/Book.js';

// const router = express.Router();

// // Lấy danh sách sách với phân trang và tìm kiếm
// router.get('/', async (req, res) => {
//   try {
//     const { page = 1, limit = 10, search = '' } = req.query;
//     const skip = (page - 1) * limit;
    
//     const query = {};
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { author: { $regex: search, $options: 'i' } }
//       ];
//     }
    
//     const [books, total] = await Promise.all([
//       Book.find(query).skip(skip).limit(limit),
//       Book.countDocuments(query)
//     ]);
    
//     res.json({
//       books,
//       totalPages: Math.ceil(total / limit),
//       currentPage: parseInt(page)
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Thêm sách mới
// router.post('/', async (req, res) => {
//   try {
//     const book = new Book(req.body);
//     const newBook = await book.save();
//     res.status(201).json(newBook);
//   } catch (err) {
//     res.status(400).json({ 
//       message: err.message || 'Lỗi khi thêm sách mới'
//     });
//   }
// });

// // Cập nhật sách
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedBook = await Book.findByIdAndUpdate(id, req.body, { 
//       new: true,
//       runValidators: true // Đảm bảo validate dữ liệu khi update
//     });
    
//     if (!updatedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }
    
//     res.json(updatedBook);
//   } catch (err) {
//     res.status(400).json({ 
//       message: err.message || 'Lỗi khi cập nhật sách'
//     });
//   }
// });

// // Xóa sách
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBook = await Book.findByIdAndDelete(id);
    
//     if (!deletedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }
    
//     res.json({ 
//       message: 'Đã xóa sách thành công',
//       deletedBookId: id
//     });
//   } catch (err) {
//     res.status(500).json({ 
//       message: err.message || 'Lỗi khi xóa sách'
//     });
//   }
// });

// export default router;





// import express from 'express';
// const Book = require('../models/Book'); 

// const router = express.Router();

// // Lấy danh sách sách với phân trang và tìm kiếm
// router.get('/', async (req, res) => {
//   try {
//     const { page = 1, limit = 10, search = '' } = req.query;
//     const skip = (page - 1) * limit;

//     // Tạo query tìm kiếm
//     const query = {};
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { author: { $regex: search, $options: 'i' } }
//       ];
//     }

//     // Lấy danh sách sách và tổng số sách
//     const [books, total] = await Promise.all([
//       Book.find(query).skip(skip).limit(limit),
//       Book.countDocuments(query)
//     ]);

//     // Trả về dữ liệu dưới dạng JSON
//     res.json({
//       books,
//       totalPages: Math.ceil(total / limit),
//       currentPage: parseInt(page),
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Thêm sách mới
// router.post('/', async (req, res) => {
//   try {
//     const book = new Book(req.body);
//     const newBook = await book.save();
//     res.status(201).json(newBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message || 'Lỗi khi thêm sách mới' });
//   }
// });

// // Cập nhật sách
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true, // Đảm bảo validate dữ liệu khi update
//     });

//     if (!updatedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }

//     res.json(updatedBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message || 'Lỗi khi cập nhật sách' });
//   }
// });

// // Xóa sách
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBook = await Book.findByIdAndDelete(id);

//     if (!deletedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }

//     res.json({ message: 'Đã xóa sách thành công', deletedBookId: id });
//   } catch (err) {
//     res.status(500).json({ message: err.message || 'Lỗi khi xóa sách' });
//   }
// });
// export default router;

// routes/bookRoutes.js
// import express from 'express';
// import Book from '../models/Book.js';

// const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const { page = 1, limit = 10, search = '' } = req.query;
//     const skip = (page - 1) * limit;
//     const query = {};

//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { author: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const [books, total] = await Promise.all([
//       Book.find(query).skip(skip).limit(limit),
//       Book.countDocuments(query)
//     ]);

//     res.json({
//       books,
//       totalPages: Math.ceil(total / limit),
//       currentPage: parseInt(page),
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const book = new Book(req.body);
//     const newBook = await book.save();
//     res.status(201).json(newBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message || 'Lỗi khi thêm sách mới' });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }

//     res.json(updatedBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message || 'Lỗi khi cập nhật sách' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBook = await Book.findByIdAndDelete(id);

//     if (!deletedBook) {
//       return res.status(404).json({ message: 'Không tìm thấy sách' });
//     }

//     res.json({ message: 'Đã xóa sách thành công', deletedBookId: id });
//   } catch (err) {
//     res.status(500).json({ message: err.message || 'Lỗi khi xóa sách' });
//   }
// });

// export default router;







import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

// Lấy danh sách sách với phân trang và tìm kiếm
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 9, search = '' } = req.query;
    const skip = (page - 1) * limit;

    // Tạo query tìm kiếm
    const query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }

    // Truy vấn sách và tổng số sách
    const [books, total] = await Promise.all([
      Book.find(query).skip(skip).limit(parseInt(limit)),
      Book.countDocuments(query)
    ]);

    // Trả về dữ liệu dưới dạng JSON
    res.json({
      books,
      totalPages: Math.ceil(total / limit),  // Tổng số trang
      currentPage: parseInt(page),           // Trang hiện tại
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Thêm sách mới
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Lỗi khi thêm sách mới' });
  }
});

// Cập nhật sách
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true, // Đảm bảo validate dữ liệu khi update
    });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Không tìm thấy sách' });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Lỗi khi cập nhật sách' });
  }
});

// Xóa sách
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Không tìm thấy sách' });
    }

    res.json({ message: 'Đã xóa sách thành công', deletedBookId: id });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Lỗi khi xóa sách' });
  }
});

export default router;



