const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "LELO"
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
