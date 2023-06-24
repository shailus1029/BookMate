const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining the model properties;
const userSchema = new Schema(
	{
		userId: {
			type: String,
			required: true
		},
		firstname: {
			type: String
		},
		lastname: {
			type: String
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		mobile: {
			type: Number
		},
		deviceId: {
			type: String,
			required: true
		},
		latitude: {
			type: String
		},
		longitude: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

const addUser = body => {
	const User = mongoose.model("User", userSchema);
	const user = new User(body);
	return new Promise((resolve, reject) => {
		user.save((err, data) => {
			if (err) {
				reject({ error: err });
			} else {
				resolve(data);
			}
		});
	});
};

const getList = filter => {
	const User = mongoose.model("User", userSchema);
	return new Promise((resolve, reject) => {
		User.find(filter, (err, data) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(data);
			}
		});
	});
};

const getUser = id => {
	const User = mongoose.model("User", userSchema);
	return new Promise((resolve, reject) => {
		User.findById(id, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

const updateUser = (id, body) => {
	const User = mongoose.model("User", userSchema);
	return new Promise((resolve, reject) => {
		User.findByIdAndUpdate(id, { $set: body }, { new: true }, (err, user) => {
			if (err) {
				reject(err);
			} else {
				resolve(user);
			}
		});
	});
};

const deleteUser = id => {
	const User = mongoose.model("User", userSchema);
	return new Promise((resolve, reject) => {
		User.findByIdAndRemove(id, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

//exporting the model
module.exports = {
	addUser,
	getList,
	getUser,
	updateUser,
	deleteUser
};
