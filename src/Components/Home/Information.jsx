// Information.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function Information() {
  const location = useLocation();
  const { selectedImage } = location.state;

  return (
    <div className='mb-20'>
      {selectedImage && selectedImage.information && selectedImage.information.length > 0 && (
        <ul>
          {selectedImage.information.map((item, index) => (
            <div 
              className='ml-5 mt-5 text-center'  // Center the text within the parent div
              key={index}
            >
              <img
                className='w-[800px] h-[500px] object-cover mx-auto border p-10 bg-gray-200'  // Center the image horizontally
                src={item.images} 
                alt=''
              />
              <div>
                <p
                  className='text-xl mb-10 mt-10 font-dbc whitespace-pre-line text-justify'
                >
                  <span className='text-red-500 text-3xl ml-20 underline'>គ្រឿងផ្សំ:</span> {item.ingredient}
                </p>
              </div>
              <p
                className='text-xl mb-10 mt-10 font-dbc whitespace-pre-line text-justify'
              >
                <span className='text-red-500 text-3xl ml-20 underline'>វិធីធ្វើ:</span> {item.Step}
              </p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Information;
