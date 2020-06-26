const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");
const router = express.Router();

// get all users
router.get("/", async (req, res) => {
    const users = await knex.select("*").from("users");
    res.json(users);
});

// get individual user
router.get("/:id", async (req, res) => {
    const [user] = await knex("users").where({ id: req.params.id });
    res.json(user);
});

// update user
router.patch("/:id", async (req, res) => {
    const { name, email, avatar } = req.body.form;

    await knex("users")
        .where({ id: req.params.id })
        .update({
            name: name,
            email: email,
            avatar: avatar === "" ? null : avatar,
        });

    const [user] = await knex("users").where({ id: req.params.id });
    req.session.user = user;
    res.json(user);
});

module.exports = router;
