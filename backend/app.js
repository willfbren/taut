const cors = require("cors");
const bodyParser = require("body-parser");

const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());
app.use(bodyParser());

app.use(express.static("../frontend"));

// index
app.get("/users", async function (req, res) {
	const users = await knex.select("*").from("users");
	res.json(users);
});

// create
app.post("/users", async function (req, res) {
	const newUser = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	await knex("users").insert(newUser);
	io.emit("new-user", newUser);

	res.json(newUser);
});

http.listen(3000);
console.log("Listening on port 3000");
