const express = require("express");
const router = express.Router();
const WeedsProb = require("../models/weedsprohibited");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Bamboo"
  });
});

router.get("/search", (req, res, next) => {
  const weedName = req.query.Name;
  //console.log(weedName);
  WeedsProb.find({ Name: weedName })
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

// Search by ID
router.get("/asd", (req, res, next) => {
  const id = req.query.id;
  WeedsProb.find({ _id: id })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
