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

// users index
app.get("/users", async function (req, res) {
	const users = await knex.select("*").from("users");
	res.json(users);
});

// users create
app.post("/users", async function (req, res) {
	const newUser = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	await knex("users").insert(newUser);
	io.emit("new-user", newUser);

	res.json(newUser);
});

// if user refreshes page i can send a fetch to this endpoint and set the user in redux
app.get("/check-user", async (req, res) => {
	res.json({
		user: req.session.user || null,
		team: req.session.team || null,
		channel: req.session.channel || null,
		channels: req.session.channels || []
	});
});

app.post("/sign-in", async (req, res) => {
	const { email, password } = req.body.form;
	const [ user ] = await knex("users").where({ email });
	const [ user_team ] = await knex.select("*").from("user_team").where("user_id", user.id);
	const [ team ] = await knex.select().from("teams").where({ id: user_team.team_id })

	if (user && (await bcrypt.compare(password, user.password))) {
		req.session.user = user;
		req.session.team = team;
		res.json({ 
			success: true, 
			user: user,
			team: team 
		});
	} else {
		res.json({
			success: false,
			user: null,
			team: null,
			message: "Email or password is incorrect.",
		});
	}
});

app.post("/sign-up", async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		const newUser = {
			name: req.body.name,
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

// team index
app.get("/teams", async function (req, res) {
	const teams = await knex.select("*").from("teams");
	res.json(teams);
});

// channels index
app.get("/:id/channels", async function (req, res) {
	const channels = await knex("channels").where("team_id", req.params.id)
	req.session.channels = channels
	res.json(channels)
});

app.post("/add-channel", async (req, res) => {	
	const { channel_name, description } = req.body.form
	
	const newChannel = {
		channel_name: channel_name,
		channel_description: description,
		team_id: req.session.team.id
	}

	await knex("channels").insert(newChannel)

	req.session.channel = newChannel

	res.json(newChannel)
})

app.get("/set-channel/:id", async (req, res) => {
	const [ channel ] = await knex("channels").where("id", req.params.id)
	req.session.channel = channel
	res.json(channel)
})

app.get("/:id/messages", async (req, res) => {
	const messages = await knex.select("*").from("messages").where("channel_id", req.params.id);
	res.json(messages);
})

http.listen(3000);
console.log("Listening on port 3000");
