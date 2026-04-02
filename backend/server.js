<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
=======
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


>>>>>>> fa6c07b (changed ui in dashboard)

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/invoices", require("./routes/invoiceRoutes"));
=======
import customerRoutes from "./routes/customerRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";

app.use("/api/customers", customerRoutes);
app.use("/api/invoices", invoiceRoutes);

dotenv.config();

// test route
app.get("/", (req, res) => {
  res.send("Backend set ann tto");
});
>>>>>>> fa6c07b (changed ui in dashboard)

app.listen(process.env.PORT, () =>
  console.log("Server running")
);