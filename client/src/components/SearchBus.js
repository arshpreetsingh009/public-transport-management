import DropDown from "./DropDown";
import { useFetchLocationsQuery } from "../store/api/locationApi";
import { useState } from "react";
const SearchBus = ({ searchBusses }) => {
  const { data, isFetching } = useFetchLocationsQuery();
  const [pickup, setPickUp] = useState("");
  const [drop, setDrop] = useState("");
  const handleClick = () => {
    if (pickup && drop) {
      console.log({ pickup, drop });
      searchBusses({ pickup, drop }); // Pass pickup and drop to searchBusses
    } else {
      alert("Please select both pickup and drop locations.");
    }
  };
  const getPickup = (data) => {
    console.log(data);
    setPickUp(data);
  };
  const getDrop = (data) => {
    setDrop(data);
  };
  return (
    <div>
      {isFetching ? (
        <div></div>
      ) : (
        <div className="w-full h-[500px] flex bg-green-800">
          <div className="flex p-[250px]">
            <div className="flex">
              <DropDown
                locations={data.locations[0].places}
                handler={getPickup}
              />
              <DropDown
                locations={data.locations[0].places}
                handler={getDrop}
              />
            </div>
            <div>
              <button onClick={handleClick} className="h-8 w-32 bg-blue-800">
                search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBus;
