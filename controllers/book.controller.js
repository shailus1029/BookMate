const uuidv4 = require("uuid/v4");
const services = require("../services/book.service");
const { handleError } = require("../utils/error.handler");
const logger = require("../utils/logger");

exports.addBook = function(req, res) {
	let errors = [];
	let isError = false;
	const body = req.body;
	return new Promise((resolve, reject) => {
		if (Object.keys(body).length === 0) {
			handleError("noPayload", errors);
			isError = true;
		}
		if (!body.name) {
			isError = true;
			handleError("noBookName", errors);
		}
		if (!body.userId) {
			isError = true;
			handleError("noUserId", errors);
		}
		if (!body.price) {
			isError = true;
			handleError("noBookPrice", errors);
		}
		if (isError) {
			return reject(errors);
		} else {
			resolve(true);
		}
	})
		.then(resolved => {
			const images = req.files.map((file, index) => {
				return `/uploads/${req.files[index].filename}`;
			});
			body.bookId = uuidv4();
			body.images = images;
			body.mainImage = `/uploads/${req.files[0].filename}`;
			return services.addBook(body);
		})
		.then(data => {
			res.status(200).json({
				data: {
					success: 1,
					bookId: data._id,
					status: data.status,
					message: "book added successfully"
				}
			});
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};

exports.getAllBooks = function(req, res) {
	return new Promise((resolve, reject) => {
		return resolve(true);
	})
		.then(resolved => {
			return services.getAllBooks({});
		})
		.then(data => {
			if (data) {
				res.status(200).json({
					data: {
						success: 1,
						message: "successfull response",
						librariList: data
					}
				});
			}
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({
				errors: err
			});
		});
};

exports.getUserHistory = function(req, res) {
	let isError = false;
	errors = [];
	const userId = req.params.userId;

	return new Promise((resolve, reject) => {
		if (!userId) {
			isError = true;
			handleError("noUserId", errors);
		}
		if (isError) {
			return reject(errors);
		} else {
			resolve(true);
		}
	})
		.then(resolved => {
			return services.getAllBooks({ userId });
		})
		.then(data => {
			if (data) {
				res.status(200).json({
					data: {
						success: 1,
						message: "history retrive successfully",
						addedBooks: data
					}
				});
			}
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};

exports.bookDetails = function(req, res) {
	let isError = false;
	errors = [];
	const id = req.params.bookId;
	return new Promise((resolve, reject) => {
		if (!id) {
			isError = true;
			handleError("noBookId", errors);
		}
		if (isError) {
			reject(errors);
		} else {
			resolve(true);
		}
	})
		.then(resolved => {
			return services.getBook(id);
		})
		.then(data => {
			if (data) {
				res.status(200).json({
					data: {
						success: 1,
						bookDetails: data,
						message: "data retrive successfully"
					}
				});
			} else {
				res.status(200).json({
					data: {
						success: 0,
						message: "No details found"
					}
				});
			}
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};
