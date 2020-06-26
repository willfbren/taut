const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");
const router = express.Router()

router.get('/', async (req, res) => {
    const userteam = await knex.select("*").from("user_team");
    res.json(userteam)
})

module.exports = router