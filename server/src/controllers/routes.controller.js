const Route = require("../model/routes.model");
async function postRoutes(req, res) {
  try {
    // Extract data from the request body
    const { start_location, end_location, distance, stops } = req.body;

    // Create a new Route instance
    const newRoute = new Route({
      start_location,
      end_location,
      distance,
      stops,
    });

    // Save the new route to the database
    const savedRoute = await newRoute.save();

    // Send a response back to the client
    res.status(201).json({
      message: "Route created successfully",
      route: savedRoute,
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating route:", error);
    res.status(500).json({
      message: "An error occurred while creating the route",
      error: error.message,
    });
  }
}
module.exports = {
  postRoutes,
};
