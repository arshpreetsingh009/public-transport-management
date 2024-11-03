const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    booking_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Booking", // Reference to a Booking model (assuming you have one)
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to a User model
    },
    amount: {
      type: Number,
      required: true,
      min: 0, // Ensure amount is not negative
    },
    payment_date: {
      type: Date,
      required: true,
      default: Date.now, // Set default to current date
    },
    payment_method: {
      type: String,
      required: true,
      enum: ["credit card", "debit card", "UPI", "cash", "net banking"], // Adjust as necessary
    },
    payment_status: {
      type: String,
      required: true,
      enum: ["success", "failed"], // Restrict payment status to specific values
      default: "success", // Default payment status
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
