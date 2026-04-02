<<<<<<< HEAD
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  date: Date,

  customer: {
    name: String,
    location: String,
    contact: String,
    trn: String
  },

  items: [
    {
      name: String,
      qty: Number,
      rate: Number,
      vat: Number,
      total: Number
    }
  ],

  subtotal: Number,
  vatTotal: Number,
  discount: Number,
  grandTotal: Number,

  paymentMethod: String
});

module.exports = mongoose.model("Invoice", invoiceSchema);
=======
import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true }
  },
  products: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true }
    }
  ],
  subTotal: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
>>>>>>> fa6c07b (changed ui in dashboard)
