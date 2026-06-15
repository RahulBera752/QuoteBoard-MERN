const dns = require("dns");

// Force Google DNS (helps resolve MongoDB Atlas DNS issues)
dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/quotes", require("./routes/quotes"));

// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:");
    console.error(err);
  });