const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");

// using http server to bind the socket io
const http = require("http");

//call the database connectivity function
db();

//initilizing our express app
const app = express();
app.use(express.json());

//adding routes to application
require("./routes")(app);

//adding body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//defining the port to run the server
const port = 8000;

// var server = http.createServer(app);

//listening to the port 8000
const server = app.listen(port, () => {
	console.log("server is running on  port : ", port);
});

module.exports = {
	server
};
