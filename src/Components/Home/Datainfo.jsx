// Datainfo.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Datainfo() {
  const location = useLocation();
  const selectedItem = location.state.selectedImageFood;
  const navigate = useNavigate();

  const handleImageClick = (selectedImage) => {
    // Use navigate to redirect to the detail page when an image is clicked
    navigate(`/info`, { state: { selectedImage } });
  };

  const handleToHome = () => {
    navigate('/')
  }

  return (
    <div className='mb-20'>
      {/* Display details */}
      {selectedItem.detail && selectedItem.detail.length > 0 && (
        <div>
          <button
            onClick={handleToHome}
            className="bg-blue-500 hover:bg-blue-700 
            text-white font-bold py-2 px-4 rounded-full w-[100px]
            ml-5 mt-5 cursor-pointer"
          >
            BACK
          </button>
          <ul>
            {selectedItem.detail.map((item, index) => (
              <div
              className='flex items-center ml-5 border p-5 mt-5 w-[1600px] 
              bg-gray-200 rounded-lg' 
              key={item.id} 
              onClick={() => handleImageClick(item)}>
                <img 
                  src={item.imagey}
                  className="w-[400px] h-[300px] mt-6 object-cover cursor-pointer"
                />
                <li
                className='pl-5 text-2xl'
                key={index}>{item.namey}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Datainfo;
