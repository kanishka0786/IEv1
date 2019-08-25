const express = require("express");
const router = express.Router();
const Weed = require("../models/weed");

// Get all data (Still need to work on this)
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "LELO"
  });
});

// Search by name
router.get("/search", (req, res, next) => {
  const weedName = req.query.name;
  Weed.find({ name: weedName })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Post a data
// router.post("/", (req, res, next) => {
//   const weed = new Weed({
//     id: req.body.id,
//     name: req.body.name,
//     image: req.body.image,
//     c_names: req.body.c_names,
//     species_name: req.body.species_name,
//     family: req.body.family,
//     growth_form: req.body.growth_form,
//     flower_color: req.body.flower_color,
//     leaf_arr: req.body.leaf_arr,
//     foliage_color: req.body.foliage_color,
//     deciduous: req.body.deciduous,
//     flowering_time: req.body.flowering_time,
//     control_methods: req.body.control_methods,
//     origin: req.body.origin,
//     notifiable: req.body.notifiable
//   });
//   weed
//     .save()
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => console.log(err));
//   res.status(201).json({
//     message: "Data saved",
//     createdWeed: weed
//   });
// });

// Search by ID
router.get("/:weedId", (req, res, next) => {
  const id = req.params.weedId;
  Weed.find({ id: id })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Search by foliage color
router.get("/search/color", (req, res, next) => {
  const weedcolour = req.query.foliage_color;
  Weed.find({ foliage_color: weedcolour })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Search by common names
router.get("/search/c_names", (req, res, next) => {
  const commonName = req.query.c_name;
  Weed.find({ c_names: commonName })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
