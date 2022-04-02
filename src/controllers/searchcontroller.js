
const express = require("express")
const Search = require("../models/searchmodel")
const router = express.Router()

router.get("", async (req, res) => {
  try {
    const search_result = await Search.find();
    return res.status(201).send(search_result);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.get("/:title", async (req, res) => {
    try {
        let regex = new RegExp(req.params.title, "i");
      const search_result = await Search.find({title:regex}).limit(5);
      console.log(search_result)
      return res.status(201).send(search_result);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
// router.post("", async (req, res) => {
//     try {
//       const main_sectioln = await User.create(req.body);
  
//       return res.status(201).send(main_sectioln);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   });


  module.exports =router;