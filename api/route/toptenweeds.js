const express = require("express");
const router = express.Router();
const toptenweeds = require("../models/toptenweeds");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Ghanta"
  });
});

router.get("/search", (req, res, next) => {
  //const weedName = req.query.Name;
  //console.log(weedName);
  toptenweeds
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

// Search by ID
router.get("/asd", (req, res, next) => {
  const id = req.query.id;
  toptenweeds
    .find({ _id: id })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
