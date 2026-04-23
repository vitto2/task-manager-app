const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectToDatabase = require("./src/database/mongoose.database");

const app = express();

connectToDatabase();

app.get("/", (req, res) => {
    res.status(200).send("toma aí tua resposta, otaro!");
});

app.listen(8000, () => {
    console.log("Listening on a port 8000!");
});
