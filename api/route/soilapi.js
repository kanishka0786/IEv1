const express = require("express");
const router = express.Router();
const Weed = require("../models/soilapi");

// Get all data (Still need to work on this)
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "LELO"
  });
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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
router.get("/search/soiltype", (req, res, next) => {
  const soiltype = req.query.Soil_type;
  Weed.find({ Soil_type: soiltype })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
router.get("/search/floweringtime", (req, res, next) => {
  const rePattern = req.query.New_Flower_Time;
  Weed.find({ New_Flower_Time: { $regex: rePattern } })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/search/filters", (req, res, next) => {
  const soiltype = req.query.Soil_type;
  //const floweringtime = req.query.New_Flower_Time;
  const rePattern = req.query.New_Flower_Time;
  //const flowerColor = req.query.flower_color;
  if (soiltype != "no" && rePattern != "no") {
    Weed.find({
      $and: [
        { Soil_type: { $eq: soiltype } },
        { New_Flower_Time: { $regex: rePattern } }
      ]
    })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  } else if (soiltype === "no" && rePattern === "no") {
    res.status(200).json({
      message: "choose atleast Two choices"
    });
  } else if (soiltype != "no" && rePattern === "no") {
    Weed.find({ Soil_type: { $eq: soiltype } })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  } else if (soiltype === "no" && rePattern != "no") {
    Weed.find({ New_Flower_Time: { $regex: rePattern } })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  }
});
module.exports = router;
