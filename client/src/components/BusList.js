import React from "react";

const BusList = ({ items }) => {
  console.log(items);
  const dateString = items.schedule.departure_time;
  const date = new Date(dateString);
  const timeOnly = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const dateString2 = items.schedule.arrival_time;
  const date2 = new Date(dateString2);
  const timeOnly2 = date2.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="flex gap-x-4 w justify-between mx-8 my-8 h-[100px] bg-blue-400 rounded-md px-4 py-4">
      <div>
        <div className="text-xl font-semibold">{items.bus.bus_name}</div>
        <div className="text-sm font-thin my-2">{items.bus.bus_type}</div>
      </div>
      <div className="flex gap-x-6 ">
        <div className="text-xl font-semibold">{timeOnly}</div>
        <div className="text-md font-thin">07h 00m</div>
        <div className="text-xl font-semibold">{timeOnly2}</div>
      </div>
      <div className="">
        <div>{items.schedule.available_seats + "  seats available"}</div>
        <div className="my-2">
          <button className="py-1 px-6 rounded-md bg-red-600">Book</button>
        </div>
      </div>
    </div>
  );
};

export default BusList;
