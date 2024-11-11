import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import { useFetchLocationsQuery } from "../store/api/locationApi";
import { useState } from "react";
import Search from "@anujsharma141/reactsearch";
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
  // const req = (data) => {
  //   console.log(data);
  // };
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
        <div className="w-full h-[300px] flex bg-green-400">
          <div className="flex p-[150px] gap-x-4 mx-auto">
            <div className="flex gap-x-4">
              <DropDown
                locations={data.locations[0].places}
                handler={getPickup}
              />
              <DropDown
                locations={data.locations[0].places}
                handler={getDrop}
              />
              {/* <Search data={data.locations[0].places} /> */}
            </div>
            <div>
              <button
                onClick={handleClick}
                className="mx-2 h-8 w-32 rounded-md bg-blue-800"
              >
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
