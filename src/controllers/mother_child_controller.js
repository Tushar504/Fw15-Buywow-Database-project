const express = require("express");
const mother_child_data = require("../models/mother_child.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const mother_child_datas = await mother_child_data.find().lean().exec();
    return res.status(201).send({ mother_child_datas: mother_child_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;
