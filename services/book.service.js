const bookModel = require("../models/book.model");

exports.addBook = async function(body) {
	return bookModel.addBook(body).then(data => {
		return data;
	});
};

exports.getAllBooks = async function(filter) {
	return bookModel.getAllBooks(filter).then(data => {
		return data;
	});
};

exports.getBook = async function(id) {
	return bookModel.getBook(id).then(data => {
		return data;
	});
};

exports.updateBook = async function(id, body) {
	return bookModel.updateBook(id, body).then(data => {
		return data;
	});
};

exports.deleteBook = async function(id) {
	return bookModel.updateBook(id).then(data => {
		return data;
	});
};

exports.checkIsBookExist = async function(body) {
	return bookModel.getAllBooks(body).then(data => {
		return data;
	});
};
