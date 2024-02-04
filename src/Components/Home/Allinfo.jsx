import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Allinfo() {
  const [allImages, setAllImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/api/food_provinces';

    axios.get(apiUrl)
      .then(response => {
        setAllImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleImageClick = (selectedImageFood) => {
    // Use navigate to redirect to the detail page when an image is clicked
    navigate(`/data`, { state: { selectedImageFood } });
  };

  const handleToHome = () => {
    navigate('/')
  }

  return (
    <div className="flex flex-wrap">
      {allImages.map((image, index) => (
        <div key={image.id}
        onClick={() => handleImageClick(image)} 
        className="w-[500px] border p-5 mt-5 ml-5 mr-5 
        bg-gray-200 rounded-lg cursor-pointer hover:bg-blue-200">
          <img
            className="w-[500px] h-[300px] object-cover"
            src={image.image}
            alt={`banner-${index}`}
          />
          <p className='text-xl mt-5 text-center'>
            {image.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Allinfo;
