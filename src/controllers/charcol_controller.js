const express = require("express");
const charcol_data = require("../models/charcole.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const charcol_datas = await charcol_data.find().lean().exec();
    return res.status(201).send({ charcol_datas: charcol_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;