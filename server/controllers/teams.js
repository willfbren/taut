const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");
const router = express.Router();

// teams list
router.get('/', async (req, res) => {
    const teams = await knex.select("*").from("teams");
    res.json(teams);
})

// individual team
router.get('/:id', async (req, res) => {
    const team = await knex('teams').where({ id: req.params.id })
    res.json(team)
})

// teams users
router.get('/:id/users', async (req, res) => {
    const team = await knex("users")
        .join("user_team", "users.id", "=", "user_team.user_id")
        .where("team_id", req.params.id);

    res.json(team)
})

// team channels
router.get('/:id/channels', async (req, res) => {
    const channels = await knex("channels").where("team_id", req.params.id);
    req.session.channels = channels;
    res.json(channels);
})

module.exports = router