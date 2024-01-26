import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CafeDatainfor() {
  const location = useLocation();
  const { selectedImageCafe } = location.state;
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/');
  }

  return (
    <div>
      {/* Display details */}
      {selectedImageCafe && selectedImageCafe.detail && selectedImageCafe.detail.length > 0 && (
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
            {selectedImageCafe.detail.map((item, index) => (
              <div
                className='items-center ml-5 border p-5 mt-5 w-[1600px] 
                bg-gray-200 rounded-lg' 
                key={index}
              >
                <img 
                  src={item.images}
                  className="w-[400px] h-[300px] mt-6 mx-auto object-cover cursor-pointer"
                  alt={`Cafe Image ${index}`}
                />
                <li
                  className='pl-5 text-2xl 
                  whitespace-pre-line font-koi'
                >
                  {item.description}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CafeDatainfor;
