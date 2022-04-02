const express = require("express");
const nutrition_health_data = require("../models/nutrition_health.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const nutrition_health_datas = await nutrition_health_data.find().lean().exec();
    return res.status(201).send({ nutrition_health_datas: nutrition_health_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;