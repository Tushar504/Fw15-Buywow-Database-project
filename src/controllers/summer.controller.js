const express = require("express")
const router = express.Router()

const summer = require("../models/summer.model.js")


// _________________________________getting data

router.get("", async (req, res) => {
    try {
        const Summer = await summer.find().lean().exec()
        return res.status(200).send(Summer)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})
module.exports = router