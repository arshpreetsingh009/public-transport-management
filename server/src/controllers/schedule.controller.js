const Schedule = require("../model/schedule.model");
const Bus = require("../model/bus.model");
const mongoose = require("mongoose");

async function createSchedule(req, res) {
  try {
    const {
      bus_id,
      departure_date,
      departure_time,
      arrival_time,
      stops,
      available_seats,
    } = req.body;

    // Check if all required fields are provided
    if (
      !bus_id ||
      !departure_date ||
      !departure_time ||
      !arrival_time ||
      available_seats === undefined
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const busObjectId = new mongoose.Types.ObjectId(bus_id);
    const busExists = await Bus.findById(busObjectId);

    if (!busExists) {
      return res
        .status(400)
        .json({ message: "Invalid bus_id. Bus does not exist." });
    }
    const newSchedule = new Schedule({
      bus_id,
      departure_date,
      departure_time,
      arrival_time,
      stops,
      available_seats,
    });
    // console.log(newSchedule);
    // Save the new schedule to the database
    console.log("hi");
    const savedSchedule = await newSchedule.save();

    res.status(201).json(savedSchedule); // Send the saved schedule data back to the client
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
async function getBusses(req, res) {
  // Controller to fetch buses and schedules based on pickup and drop locations
  const { pickup, drop } = req.body;

  try {
    // Find all schedules that match the pickup location in start_location or stops
    const schedules = await Schedule.find({
      $or: [
        { "stops.stop_name": pickup }, // Pickup in stops
        { start_location: pickup }, // Pickup in start_location
      ],
    })
      .populate({
        path: "bus_id", // Populating the bus information
        select: "bus_number bus_name bus_type", // Select fields you want from Bus model
      })
      .exec();

    // Filter the schedules based on drop location and the condition that the pickup comes before drop
    const filteredSchedules = schedules.filter((schedule) => {
      // Find the index of pickup and drop locations in the stops array
      const pickupIndex = schedule.stops.findIndex(
        (stop) => stop.stop_name === pickup
      );
      const dropIndex = schedule.stops.findIndex(
        (stop) => stop.stop_name === drop
      );

      // Ensure that both pickup and drop are found, and that pickup index is before drop index
      return pickupIndex !== -1 && dropIndex !== -1 && pickupIndex < dropIndex;
    });

    // If no schedules found, return an error message
    if (filteredSchedules.length === 0) {
      return res.status(404).json({
        message: "No buses found for the given pickup and drop locations",
      });
    }

    // Calculate the total distance for each filtered schedule
    const response = filteredSchedules.map((schedule) => {
      // Find the index of pickup and drop locations
      const pickupIndex = schedule.stops.findIndex(
        (stop) => stop.stop_name === pickup
      );
      const dropIndex = schedule.stops.findIndex(
        (stop) => stop.stop_name === drop
      );

      // Calculate the distance between pickup and drop location
      const totalDistance = schedule.stops
        .slice(pickupIndex, dropIndex + 1) // Get the stops between pickup and drop
        .reduce((acc, stop) => acc + stop.distance, 0); // Sum up the distance of those stops

      return {
        schedule: {
          _id: schedule._id,
          departure_date: schedule.departure_date,
          departure_time: schedule.departure_time,
          arrival_time: schedule.arrival_time,
          available_seats: schedule.available_seats,
          total_distance: totalDistance, // Add the total distance here
        },
        bus: {
          bus_number: schedule.bus_id.bus_number,
          bus_name: schedule.bus_id.bus_name,
          bus_type: schedule.bus_id.bus_type,
        },
      };
    });

    // Return the schedules and associated bus details with distance
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

module.exports = { createSchedule, getBusses };
