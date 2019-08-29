router.get("/search/c_names", (req, res, next) => {
  const commonName = req.query.c_names;
  const growthForm = req.query.growth_form;
  //const flowerColor = req.query.flower_color;
  const leafArrangement = req.query.leaf_arr;
  const foilageColor = req.query.foliage_color;
  if (
    commonName != "no" &&
    growthForm != "no" &&
    leafArrangement === "no" &&
    foilageColor === "no"
  ) {
    Weed.find({
      $and: [
        { c_names: { $eq: commonName } },
        { growth_form: { $eq: growthForm } }
      ]
    })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  } else if (
    commonName === "no" &&
    growthForm === "no" &&
    leafArrangement === "no" &&
    foilageColor === "no"
  ) {
    res.status(200).json({
      message: "choose atleast Two choices"
    });
  } else if (
    commonName != "no" &&
    growthForm === "no" &&
    leafArrangement != "no" &&
    foilageColor === "no"
  ) {
    Weed.find({
      $and: [
        { c_names: { $eq: commonName } },
        { leaf_arr: { $eq: leafArrangement } }
      ]
    })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  } else if (
    commonName === "no" &&
    growthForm != "no" &&
    leafArrangement === "no" &&
    foilageColor != "no"
  ) {
    Weed.find({
      $and: [
        { foliage_color: { $eq: foilageColor } },
        { growth_form: { $eq: growthForm } }
      ]
    })

      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  }
});

router.get("/search/c_names", (req, res, next) => {
  const commonName = req.query.c_names;
  const growthForm = req.query.growth_form;
  //const flowerColor = req.query.flower_color;
  const leafArrangement = req.query.leaf_arr;
  const foilageColor = req.query.foliage_color;
  if (
    commonName != "no" &&
    growthForm != "no" &&
    leafArrangement != "no" &&
    foilageColor != "no"
  ) {
    Weed.find({
      $and: [
        { c_names: { $eq: commonName } },
        { growth_form: { $eq: growthForm } },
        { leaf_arr: { $eq: leafArrangement } },
        { foliage_color: { $eq: foilageColor } }
      ]
    })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  } else if (
    commonName === "no" &&
    growthForm === "no" &&
    leafArrangement === "no" &&
    foilageColor === "no"
  ) {
    res.status(200).json({
      message: "no"
    });
  } else if (
    commonName != "no" &&
    growthForm != "no" &&
    leafArrangement != "no" &&
    foilageColor === "no"
  ) {
    Weed.find({})
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  } else if (
    commonName === "no" &&
    growthForm === "no" &&
    leafArrangement === "no" &&
    foilageColor != "no"
  ) {
    Weed.find({
      foliage_color: { $eq: foilageColor }
    })
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(200).json({ error: err });
      });
  }

  // Weed.find({ c_names: commonName })
  //   .exec()
  //   .then(doc => {
  //     res.status(200).json(doc);
  //   })
  //   .catch(err => {
  //     res.status(500).json({ error: err });
  //   });
});
