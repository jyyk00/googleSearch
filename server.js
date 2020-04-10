const express = require("express");
const app = express();
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks");