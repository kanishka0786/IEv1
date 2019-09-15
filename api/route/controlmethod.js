const express = require("express");
const router = express.Router();
const controlmethod = require("../models/controlmethod");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "MPA"
  });
});

router.get("/search", (req, res, next) => {
  //const weedName = req.query.Name;
  //console.log(weedName);
  controlmethod
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
router.get("/search/Controlmethod", (req, res, next) => {
  const Controlmethod = req.query.Controlmethod;
  controlmethod
    .find({ Controlmethod: Controlmethod })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
