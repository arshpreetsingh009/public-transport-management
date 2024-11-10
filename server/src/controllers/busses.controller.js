const Bus = require("../model/bus.model");

async function postBusses(req, res) {
  try {
    const { bus_number, bus_name, bus_type } = req.body;

    // Check if all required fields are provided
    if (!bus_number || !bus_name || !bus_type) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new Bus instance
    const newBus = new Bus({
      bus_number,
      bus_name, // Include bus_name here
      bus_type,
    });

    // Save the new bus to the database
    const savedBus = await newBus.save();

    res.status(201).json(savedBus); // Send the saved bus data back to the client
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate bus_number error
      return res.status(400).json({ message: "Bus number already exists." });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
module.exports = { postBusses };
