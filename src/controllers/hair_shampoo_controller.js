const express = require("express");
const hair_shampoo_data = require("../models/hair_shampoo.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const hair_shampoo_datas = await hair_shampoo_data.find().lean().exec();
    return res.status(201).send({ hair_shampoo_datas: hair_shampoo_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;
