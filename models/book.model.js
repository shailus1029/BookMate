const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
	{
		bookId: {
			type: String,
			required: true,
			unique: true
		},
		name: {
			type: String,
			required: true
		},
		publisher: {
			type: String,
			required: true
		},
		yop: {
			type: String
		},
		price: {
			type: String
		},
		author: {
			type: String
		},
		mainImage: {
			type: String
		},
		images: {
			type: Array
		},
		userId: {
			type: String,
			required: true
		},
		status: {
			type: String,
			default: "pending"
		}
	},
	{
		timestamps: true
	}
);

const addBook = body => {
	const Book = mongoose.model("Book", bookSchema);
	const book = new Book(body);
	return new Promise((resolve, reject) => {
		book.save((err, data) => {
			if (err) {
				reject({ error: err });
			} else {
				resolve(data);
			}
		});
	});
};

const getAllBooks = filter => {
	const Book = mongoose.model("Book", bookSchema);
	return new Promise((resolve, reject) => {
		Book.find(filter, (err, data) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(data);
			}
		});
	});
};

const getBook = id => {
	const Book = mongoose.model("Book", bookSchema);
	return new Promise((resolve, reject) => {
		Book.findById(id, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

const updateBook = (id, body) => {
	const Book = mongoose.model("Book", bookSchema);
	return new Promise((resolve, reject) => {
		Book.findByIdAndUpdate(id, { $set: body }, { new: true }, (err, user) => {
			if (err) {
				reject(err);
			} else {
				resolve(user);
			}
		});
	});
};

const deleteBook = id => {
	const Book = mongoose.model("Book", bookSchema);
	return new Promise((resolve, reject) => {
		Book.findByIdAndRemove(id, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

module.exports = {
	addBook,
	getAllBooks,
	getBook,
	updateBook,
	deleteBook
};
