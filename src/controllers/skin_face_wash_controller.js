const express = require("express");
const skin_face_wash_data = require("../models/skin_face_wash.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const skin_face_wash_datas = await skin_face_wash_data.find().lean().exec();
    return res.status(201).send({ skin_face_wash_datas: skin_face_wash_datas });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
});

module.exports = router;