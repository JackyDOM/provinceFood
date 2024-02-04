import React, { useState, useEffect } from 'react';
import logo from './../asset/map.jpg';
import { RiSearchLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

function SearchBar({ setResult }) {
  const [input, setInput] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Reset input when the location changes
    setInput("");
  }, [location.pathname]);

  const fetchData = (value) => {
    const apiEndpoints = [
      "http://127.0.0.1:5000/api/cafe_information",
      "http://127.0.0.1:5000/api/hotel_information",
      "http://127.0.0.1:5000/api/food_provinces",
    ];

    Promise.all(apiEndpoints.map(apiEndpoint => fetch(apiEndpoint)))
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(jsonArray => {
        const combinedResults = jsonArray.reduce((combined, data, index) => {
          const filteredResults = data.filter(item => item && item.name && item.name.toLowerCase().includes(value));
          return combined.concat(filteredResults);
        }, []);

        setResult(combinedResults);
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
      setResult([]);
    } else {
      fetchData(value);
    }
  };

  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt=""
        className="h-8 w-8 mr-5 rounded-lg"
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Search for province"
          className="bg-gray-700 text-white p-2 rounded-lg pl-10 lg:w-64 xl:w-96"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <RiSearchLine className="absolute top-3 left-4 text-gray-500" />
      </div>
    </div>
  );
}

export default SearchBar;
