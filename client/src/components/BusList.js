import React from "react";

const BusList = () => {
  return (
    <div className="flex gap-x-4 w justify-between mx-8 my-8 h-[100px] bg-blue-400 rounded-md px-4 py-4">
      <div>
        <div className="text-xl font-semibold">
          Assam State Transport Corporation
        </div>
        <div className="text-sm font-thin my-2">
          Bharat Benz A/C Seater (2+2)
        </div>
      </div>
      <div className="flex gap-x-6 ">
        <div className="text-xl font-semibold">12:00 AM</div>
        <div className="text-md font-thin">07h 00m</div>
        <div className="text-xl font-semibold">19:00 PM</div>
      </div>
      <div className="">
        <div>34 Seats available</div>
        <div className="my-2">
          <button className="py-1 px-6 rounded-md bg-red-600">Book</button>
        </div>
      </div>
    </div>
  );
};

export default BusList;
