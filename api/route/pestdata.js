const express = require("express");
const router = express.Router();
const Weed = require("../models/pestdata");

// Get all data (Still need to work on this)s
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "sahi hai"
  });
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function escapeRegexx(text) {
  return text.match(/dec/g);
}

//var rePattern = new RegExp(/^Received:(.*)$/);
//const rePattern_dec = new RegExp(/(.*dec.*)/);

//var arrMatches = strText.match(rePattern_dec);

// Search by name
router.get("/search", (req, res, next) => {
  //const weedName = req.query.name;
  const regex = new RegExp(escapeRegex(req.query.name), "gi");
  Weed.find({ name: regex })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/search/floweringtime", (req, res, next) => {
  const rePattern = req.query.floweringtime;
  Weed.find({ flowering_time: { $regex: rePattern } })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/search/floraaffected", (req, res, next) => {
  const rePattern = req.query.floraaffected;
  Weed.find({ flora_affected: { $regex: rePattern } })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
