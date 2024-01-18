import React, { useState, useEffect } from 'react';
import { db } from '../../firebase_config';
import { collection, getDocs } from 'firebase/firestore';

function Allinfo() {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const allImagesCollectionRef = collection(db, 'provinces');
        const data = await getDocs(allImagesCollectionRef);
        setAllImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching all images:', error);
      }
    };

    fetchAllImages();
  }, []);

  return (
    <div className="flex flex-wrap">
      {allImages.map((image, index) => (
        <div key={image.id} className="w-1/4 p-2">
          <img
            className="w-full h-40 object-cover"
            src={image.img}
            alt={`banner-${index}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Allinfo;
