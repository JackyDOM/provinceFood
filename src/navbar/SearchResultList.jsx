// SearchResultList.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SearchResultList({ result }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    const path = getPathForItem(item);
    navigate(path);
  };

  const getPathForItem = (item) => {
    // Define the paths based on the type of data (cafe, hotel, food province)
    if (item.type === 'cafe') {
      return `/cafeData/${item.id}`;
    } else if (item.type === 'hotel') {
      return `/hotelData/${item.id}`;
    } else if (item.type === 'foodProvince') {
      return `/data/${item.id}`;
    }
  };

  return (
    result && result.length > 0 && (
      <div className='result-list bg-gray-800 p-4 rounded-md shadow-md absolute left-0 mt-2 w-full z-10'>
        {result.map((item) => (
          <div key={item.id} className='text-white my-2 hover:text-red-500 cursor-pointer'>
            <div onClick={() => handleItemClick(item)}>{item.name}</div>
          </div>
        ))}
      </div>
    )
  ) || null; // Return null if there are no results or if the input is empty
}

export default SearchResultList;
