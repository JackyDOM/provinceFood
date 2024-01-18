import React, { useState, useEffect } from 'react';
import { db } from '../../firebase_config';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function BodyPage() {
  const [imageBanner, setImageBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesCollectionRef = collection(db, 'provinces');
        const data = await getDocs(imagesCollectionRef);
        setImageBanner(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" mt-8 mb-20">
      <div className="">
        {imageBanner.length > 5 && (
          <Link to="/allInfo">
            <button className="text-black text-2xl rounded ml-6 items-center">
              ខេត្តទាំងអស់<span className=" ml-1 text-3xl">&#8250;</span>
            </button>
          </Link>
        )}

        <div className="flex max-w-full">
          {imageBanner.slice(0, 5).map((image) => (
            <div key={image.id} className="p-2" style={{ width: '400px' }}>
              <img
                className="w-full h-40 mt-6 object-cover"
                src={image.img}
                alt={``}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyPage;
