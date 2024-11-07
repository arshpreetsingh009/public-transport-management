import { useState } from "react";

const DropDown = ({ locations }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleChange = (e) => {
    // e.preventDefault();
    // handler(e.target.value);
  };
  return (
    <div>
      <select
        className="border-2 border-gray-600 md:w-56 w-28 p-1 rounded-md"
        // onChange={handleChange}
      >
        {locations.map((location) => {
          return (
            <option
              value={`${location}`}
              onClick={() => setIsClicked(!isClicked)}
              className="my-1 mx-1 p-1 font-normal rounded-md text-gray-400 hover:text-black hover:font-semibold hover:bg-gray-200"
            >
              {`${location}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
