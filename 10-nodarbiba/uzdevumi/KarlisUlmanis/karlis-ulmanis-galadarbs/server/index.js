const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()
const port = 8081;

app.use(bodyParser.json());
app.use(cors({
    origin: [""]
}))