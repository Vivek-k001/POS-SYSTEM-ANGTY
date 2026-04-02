<<<<<<< HEAD
const router = require("express").Router();
const { createInvoice, getInvoices } = require("../controllers/invoiceController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createInvoice);
router.get("/", auth, getInvoices);

module.exports = router;
=======
import express from "express";
import { createInvoice, getDailyReport } from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/", createInvoice);
router.get("/daily-report", getDailyReport);

export default router;
>>>>>>> fa6c07b (changed ui in dashboard)
