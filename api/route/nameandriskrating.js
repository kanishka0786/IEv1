const express = require("express");
const router = express.Router();
const nameandriskrating = require("../models/nameandriskrating");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "DIL"
  });
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Search by name
router.get("/search", (req, res, next) => {
  //const weedName = req.query.name;
  const regex = new RegExp(escapeRegex(req.query.name), "gi");
  nameandriskrating
    .find({ name: regex })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/search", (req, res, next) => {
  //const weedName = req.query.Name;
  //console.log(weedName);
  nameandriskrating
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
  nameandriskrating
    .find({ id: id })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
