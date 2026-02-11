const express = require("express");
const app = express();
const productRoutes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api", productRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Backend server!");
});

app.use(errorHandler);

module.exports = app;