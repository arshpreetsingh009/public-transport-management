import React, { useState } from "react";

const SearchableList = ({ items }) => {
  //   const items = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];

  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        Search for a Fruit
      </h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full md:w-1/2 p-3 mb-4 text-gray-800 bg-white rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="w-full md:w-1/2 bg-white rounded-lg shadow-lg">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 border-b border-gray-200 last:border-none hover:bg-blue-50 transition-colors"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="px-4 py-4 text-gray-500 text-center">
            No results found
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchableList;
