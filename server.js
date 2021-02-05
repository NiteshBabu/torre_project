require("dotenv").config();
const config = require("./config/config");
const express = require("express");
const request = require("request");
const cors = require("cors");
const path = require("path");
const { pipeline } = require("stream");
const app = express();
const port = config.port;

// use cors for cors handling
app.use(cors());
// console.log(__dirname)
// set path for static files
app.use(express.static(path.join(__dirname, "/build")));

// proxy to bypass the api request from here
app.use("/proxy", function (req, res) {
	let url = config.apiUrl + req.url;
	req.pipe(request({ uri: url })).pipe(res);
});

app.get("/", function (req, res) {
	res.render("index.html");
});

app.listen(port, () => {
	console.log(`On Port ${port}`);
});
