const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const express = require("express");
const router = express.Router();

router.get('/:id', async (req, res) => {
    const [message] = await knex("messages").where({ id: req.params.id });

    res.json(message);
})

module.exports = router