const express = require("express");
const router = express.Router();
const riskratingpiechart = require("../models/riskratingpiechart");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Ishq"
  });
});

router.get("/search", (req, res, next) => {
  //const weedName = req.query.Name;
  //console.log(weedName);
  riskratingpiechart
    .find({})
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log("NO");
      res.status(500).json({ error: err });
    });
});

module.exports = router;
