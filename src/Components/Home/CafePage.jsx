import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CafePage() {
  const [imageCafe, setImageCafe] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/api/cafe_information';

    axios.get(apiUrl)
      .then(response => {
        setImageCafe(response.data);
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }, []);  // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <div>
        <Link to="/cafeAllinfo">
          <button className="text-black text-2xl rounded ml-6 items-center font-dbc">
            ហាងកាហ្វេ<span className="ml-1 text-3xl">&#8250;</span>
          </button>
        </Link>
      </div>
      <div className="flex max-w-full overflow-x-auto">
          {imageCafe.slice(0, 5).map((image) => (
            <div key={image.id}>
              <div className="border m-5 bg-green-100 rounded-3xl shadow-xl
               p-5" style={{ width: '400px', cursor: 'pointer' }}>
                <img
                  className="w-full h-40 mt-6 object-cover"
                  src={image.image}
                  alt={``}
                />
                <p className='font-abc text-center mt-5'>{image.name}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default CafePage;
