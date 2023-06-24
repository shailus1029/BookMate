const userRoutes = require("./user.route");
const bookRoutes = require("./book.route");

module.exports = app => {
	app.use("/api/user", userRoutes);
	app.use("/api/book", bookRoutes);
};
