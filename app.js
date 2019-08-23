const express = require("express");
const app = express();

const productRoutes = require("./api/route/weeds");

app.use("/weeds", productRoutes);

module.exports = app;
