const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "LELO"
  });
});

router.post("/", (req, res, next) => {
  const weed = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: "Data saved",
    createdWeed: weed
  });
});

router.get("/:weedId", (req, res, next) => {
  const id = req.params.weedId;
  res.status(200).json({
    id: id,
    name: "Kamal ka phool"
  });
});

module.exports = router;
