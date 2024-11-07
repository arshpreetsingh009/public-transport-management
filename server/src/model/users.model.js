const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  booking_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Booking", // Reference to a Booking model
  },
  date: {
    type: Date,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email is unique
      match: /.+\@.+\..+/, // Simple email validation regex
    },
    password: {
      type: String,
      required: true, // Store hashed password
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["passenger", "admin"], // Restricts roles to specific values
      default: "passenger", // Default role
    },
    bookings: [bookingSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
