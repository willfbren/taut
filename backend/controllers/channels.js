const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();

app.use(bodyParser())

// get channel messages
router.get("/:id/messages", async (req, res) => {
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

module.exports = router;
