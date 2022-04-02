const express = require("express");
const massage_data = require("../models/massage.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const massage_datas = await massage_data.find().lean().exec();
    return res.status(201).send({ massage_datas: massage_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;