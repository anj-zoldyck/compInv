const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// API routes
app.use("/api/products", productRoutes);

// Export app for Vercel serverless
module.exports = app;
