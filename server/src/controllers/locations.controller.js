const Location = require("../model/locations.model");

async function postLocations(req, res) {
  try {
    const { places } = req.body; // Get the places array from the request body

    // Create a new Location document
    const newLocation = new Location({ places });
    await newLocation.save();

    res.status(201).json({
      message: "Location created successfully",
      location: newLocation,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating location", error: error.message });
  }
}
async function getLocations(req, res) {
  try {
    const locations = await Location.find(); // Find all Location documents
    res.status(200).json({ locations });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving locations", error: error.message });
  }
}
module.exports = {
  postLocations,
  getLocations,
};
