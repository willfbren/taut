const cors = require("cors");
const bodyParser = require("body-parser");
const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const http = require("http").createServer(app);
const session = require("express-session");
const io = require("socket.io")(http);

app.use(
	cors({
		origin: "http://localhost:3001",
		credentials: true,
	})
);

app.use(bodyParser());

app.use(
	session({
		secret: "secretkey",
		resave: false,
		saveUninitialized: false,
	})
);

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

// if user refreshes page i can send a fetch to this endpoint and set the user in redux
app.get("/check-user", async (req, res) => {
	res.json(req.session.user || null);
});

app.post("/sign-in", async (req, res) => {
	const { username, password } = req.body.form;
	const [ user ] = await knex("users").where({ username });

	if (user && (await bcrypt.compare(password, user.password))) {
		req.session.user = user;
		res.json({ 
			success: true, 
			user: user 
		});
	} else {
		res.json({
			success: false,
			user: null,
			message: "Username or password is incorrect.",
		});
	}
});

app.post("/sign-up", async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		const newUser = {
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		};

		await knex("users").insert(newUser);
	} catch {
		res.redirect("/sign-up");
	}
});

app.get("/sign-out", async (req, res) => {
	req.session.destroy()
})

http.listen(3000);
console.log("Listening on port 3000");
