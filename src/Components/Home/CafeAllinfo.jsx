import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CafeAllinfo() {

  const [allImagesCafe, setAllImagesCafe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/api/cafe_information';

    axios.get(apiUrl)
      .then(response => {
        setAllImagesCafe(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handleImageClick = (selectedImageCafe) => {
    // Use navigate to redirect to the detail page when an image is clicked
    navigate(`/cafeData`, { state: { selectedImageCafe } });
  };

  return (
    <div className="flex flex-wrap mb-20">
      {allImagesCafe.map((image, index) => (
        <div key={image.id}
        onClick={() => handleImageClick(image)} 
        className="w-[500px] border p-5 mt-5 ml-5 mr-5 
        bg-gray-200 rounded-lg cursor-pointer hover:bg-blue-200">
          <img
            className="w-[500px] h-[300px] object-cover"
            src={image.image}
            alt=''
          />
          <p className='text-xl mt-5 text-center'>
            {image.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CafeAllinfo