const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//
const weedRoutes = require("./api/route/weeds");
const weedprobRoute = require("./api/route/weedsprohibited");
const weedfinalRoute = require("./api/route/weedsfinal");
const toptenweedsRoute = require("./api/route/toptenweeds");
const nameandriskratingRoute = require("./api/route/nameandriskrating");
const riskratingpiechartRoute = require("./api/route/riskratingpiechart");
const weedsfinalalldoneRoute = require("./api/route/weedsfinalalldone");
const controlmethodRoute = require("./api/route/controlmethod");
const weedscompletedRoute = require("./api/route/weedscompleted");
const pestdataRoute = require("./api/route/pestdata");
const soilapiRoute = require("./api/route/soilapi");
//
mongoose.connect(
  "mongodb+srv://kanishka:Ritesh@cluster0-alih1.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

//
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors access
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

//Routes which should handle requests
app.use("/weeds", weedRoutes);
app.use("/weedprobRoutes", weedprobRoute);
app.use("/weedsfinal", weedfinalRoute);
app.use("/toptenweeds", toptenweedsRoute);
app.use("/nameandriskrating", nameandriskratingRoute);
app.use("/riskratingpiechart", riskratingpiechartRoute);
app.use("/weedsfinalalldone", weedsfinalalldoneRoute);
app.use("/controlmethod", controlmethodRoute);
app.use("/weedscompleted", weedscompletedRoute);
app.use("/pestdata", pestdataRoute);
app.use("/soilapi", soilapiRoute);

// Handle errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
