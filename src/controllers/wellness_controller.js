const express = require("express");
const wellness_data = require("../models/wellness.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const wellness_datas = await wellness_data.find().lean().exec();
    return res.status(201).send({ wellness_datas: wellness_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;