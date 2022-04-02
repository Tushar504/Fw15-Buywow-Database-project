const express = require("express");
const bath_body_data = require("../models/bath_body.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const bath_bodys = await bath_body_data.find().lean().exec();
    return res.status(201).send({ bath_bodys: bath_bodys });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;
