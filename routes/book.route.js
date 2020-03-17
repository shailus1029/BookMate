const express = require("express");
const path = require("path");
const multer = require("multer");
const bookController = require("../controllers/book.controller");

class BookRoute {
	constructor() {
		this.router = express.Router();
		this.csvLimits = {
			files: 10,
			fileSize: 2 * 102400 * 102400
		};
		this.uploadLocal = multer({
			dest: path.resolve(path.join(__dirname, "../uploads")),
			limits: this.csvLimits
		});
		this.routing();
	}
	routing() {
		this.router.get("/", bookController.getAllBooks);
		this.router.post(
			"/",
			this.uploadLocal.array("fileUpload", 20),
			bookController.addBook
		);
		this.router.get("/userHistory/:userId", bookController.getUserHistory);
		this.router.get("/bookDetails/:bookId", bookController.bookDetails);
	}
}

module.exports = new BookRoute().router;
