import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CafeAllinfo() {

  const [allImagesCafe, setAllImagesCafe] = useState([]);

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

  return (
    <div className="flex flex-wrap">
      {allImagesCafe.map((image, index) => (
        <div key={image.id}
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