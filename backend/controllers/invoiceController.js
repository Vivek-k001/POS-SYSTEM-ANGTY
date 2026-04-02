<<<<<<< HEAD
const Invoice = require("../models/Invoice");
const Product = require("../models/Product");
const { calculateInvoice } = require("../utils/calc");

exports.createInvoice = async (req, res) => {
  try {
    const { items, customer, discount } = req.body;

    // //STOCK VALIDATE CHEYYAL
    for (let item of items) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({ message: `Product not found` });
      }

      if (product.stock < item.qty) {
        return res.status(400).json({
          message: `Insufficient stock for ${product.name}`
        });
      }
    }

    // CALCULATE BILL
    const calc = calculateInvoice(items, discount);

    // STOCK KURAKKUKA
    for (let item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.qty }
      });
    }

    // SAVE INVOICE
    const invoice = await Invoice.create({
      invoiceNumber: "INV-" + Date.now(),
      date: new Date(),
      customer,
      ...calc,
      paymentMethod: "Cash"
    });

    res.json(invoice);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
=======
import Invoice from "../models/Invoice.js";

// CREATE INVOICE
export const createInvoice = async (req, res) => {
  try {
    const { customer, products, subTotal, grandTotal } = req.body;
    const invoice = new Invoice({ customer, products, subTotal, grandTotal });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET DAILY REPORT
export const getDailyReport = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const invoices = await Invoice.find({
      createdAt: { $gte: today }
    });

    const totalRevenue = invoices.reduce((acc, inv) => acc + (inv.grandTotal || 0), 0);
    const totalInvoices = invoices.length;

    res.json({
      totalRevenue,
      totalInvoices,
      invoices
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
>>>>>>> fa6c07b (changed ui in dashboard)
