const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to a User model (assuming you have one)
    },
    schedule_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Schedule", // Reference to a Schedule model
    },
    seats: {
      type: [Number],
      required: true, // Ensure seats are specified
      validate: {
        validator: function (v) {
          return v.length > 0; // Ensure at least one seat is booked
        },
        message: "At least one seat must be booked.",
      },
    },
    total_price: {
      type: Number,
      required: true,
      min: 0, // Ensure total price is not negative
    },
    status: {
      type: String,
      enum: ["confirmed", "canceled"], // Restrict status to specific values
      default: "confirmed", // Default status
    },
    booking_date: {
      type: Date,
      required: true,
      default: Date.now, // Set default to current date
    },
    payment_status: {
      type: String,
      enum: ["paid", "pending"], // Restrict payment status to specific values
      default: "pending", // Default payment status
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
