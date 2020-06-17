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

app.post("/create-team", async (req, res) => {
    const { name, email, password, team_name, team_code, avatar } = req.body.form
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        name: name,
        email: email,
        password: hashedPassword,
        avatar: avatar
    };

    const team = {
        team_name: team_name,
        team_code: team_code
    }

    const [ newUser ] = await knex("users").insert(user);
    const [ newTeam ] = await knex("teams").insert(team);

    await knex("user_team").insert({ user_id: newUser, team_id: newTeam })
})

// users index
app.get("/users", async function (req, res) {
    const users = await knex.select("*").from("users");
    res.json(users);
});

app.get("/users/:id", async (req, res) => {
	const [ user ] = await knex("users").where({ id: req.params.id })
	res.json(user)
})

app.get("/:id/users", async (req, res) => {
    const team = await knex("users")
        .join("user_team", "users.id", "=", "user_team.user_id")
        .where("team_id", req.params.id);

    res.json(team)
})

app.patch("/users/:id", async (req, res) => {
    const { name, email, avatar } = req.body.form

    await knex("users")
        .where({ id: req.params.id })
        .update({ name: name, email: email, avatar: avatar === "" ? null : avatar });

    const [ user ] = await knex("users").where({ id: req.params.id })
    req.session.user = user

    res.json(user)
})

app.get("/userteam", async (req, res) => {
    const user_team = await knex
    .select("*")
    .from("user_team") 
    res.json(user_team)
})

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

    const [ user_team ] = await knex
        .select("*")
        .from("user_team")
        .where("user_id", user.id);

    const [team] = await knex
        .select()
        .from("teams")
        .where({ id: user_team.team_id });

    if (user && (await bcrypt.compare(password, user.password))) {
        req.session.user = user;
        req.session.team = team;

        res.json({
            success: true,
            user: user,
            team: team,
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
    const { name, email, password, team_code, avatar } = req.body.form
    const [ team ] = await knex('teams').where({ team_code: team_code })
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        name: name,
        email: email,
        password: hashedPassword,
        avatar: avatar
    };
    
    const [ user ] = await knex("users").insert(newUser);
    await knex("user_team").insert({ user_id: user, team_id: team.id })
});

app.get("/sign-out", async (req, res) => {
    req.session.destroy();
});

// team index
app.get("/teams", async function (req, res) {
    const teams = await knex.select("*").from("teams");
    res.json(teams);
});

// channels index
app.get("/:id/channels", async function (req, res) {
    const channels = await knex("channels").where("team_id", req.params.id);
    req.session.channels = channels;
    res.json(channels);
});

app.post("/add-channel", async (req, res) => {
    const { channel_name, description } = req.body.form;

    const newChannel = {
        channel_name: channel_name,
        channel_description: description,
        team_id: req.session.team.id,
    };

    const [id] = await knex("channels").insert(newChannel);
    const newChanWithId = {...newChannel, id}
    req.session.channel = newChanWithId;

    res.json(newChanWithId);
});

app.get("/set-channel/:id", async (req, res) => {
    const [ channel ] = await knex("channels").where("id", req.params.id);
    req.session.channel = channel;
    res.json(channel);
});

app.get("/:id/messages", async (req, res) => {
    const user_messages = await knex("users")
        .join("messages", "users.id", "=", "messages.user_id")
        .select(
            "users.name",
            "users.avatar",
			"messages.user_id",
			"messages.id",
            "messages.content",
            "messages.created_at"
        )
        .where("channel_id", req.params.id);

	res.json(user_messages);
});

app.get("/messages/:id", async (req, res) => {
    const [ message ] = await knex("messages").where({ id: req.params.id })

    res.json(message)
})

app.post("/:id/messages", async (req, res) => {
	const { name, avatar, user_id, channel_id, content } = req.body.message

	const newMessage = {
		user_id: user_id,
		channel_id: channel_id,
		content: content
	}

	let [ lastId ] = await knex("messages").insert(newMessage)
	let [ lastMessage ] = await knex("messages").where({ id: lastId })
	let message = { ...lastMessage, name, avatar }

	io.emit('new-message', message)
	res.json(message)
});

app.patch("/:id/messages", async (req, res) => {
    const { id, content } = req.body.editedMessage
    const [ previousMessage ] = await knex("messages").where({ id: id })

    await knex("messages").where({ id: id }).update({ content: content })


    const [ editedMessage ] = await knex('messages')
        .join('users', "messages.user_id", "=", "users.id")
        .select(
            "users.name",
            "users.avatar",
            "messages.user_id",
            "messages.id",
            "messages.content",
            "messages.created_at"
        )
        .where("messages.id", id)

    // console.log(editedMessage)
    const user_messages = await knex("users")
        .join("messages", "users.id", "=", "messages.user_id")
        .select(
            "users.name",
            "users.avatar",
            "messages.user_id",
            "messages.id",
            "messages.content",
            "messages.created_at"
        )
        .where("channel_id", req.params.id);

    io.emit('edited-message', user_messages)
    res.json(user_messages)
})

app.delete("/:id/messages", async (req, res) => {
    await knex("messages").where({ id: req.body.message.id }).del()

    const user_messages = await knex("users")
        .join("messages", "users.id", "=", "messages.user_id")
        .select(
            "users.name",
            "users.avatar",
            "messages.user_id",
            "messages.id",
            "messages.content",
            "messages.created_at"
        )
        .where("channel_id", req.params.id);

    io.emit('deleted-message', user_messages)
})

http.listen(3000);
console.log("Listening on port 3000");
