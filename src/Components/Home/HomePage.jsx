import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BodyPage from './BodyPage';

function HomePage() {
  const [imageBanner, setImageBanner] = useState([]);
  const imagesCollectionRef = collection(db, 'Banner');
  const texts = ['ទេសភាពភ្នំ', 'កន្លែងដើរលេង', 'ទឹកជ្រោះ']; // Add more texts if needed

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await getDocs(imagesCollectionRef);
        setImageBanner(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    getImages();
  }, [imagesCollectionRef]);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {imageBanner.map((image, index) => (
          <div key={image.id} className="relative group">
            <img
              className='w-[1800px] object-cover h-[400px] mt-3 pl-5 pr-5'
              src={image.img}
              alt={`banner-${index}`}
            />
            <div className="absolute inset-0 flex items-center justify-center 
            opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <div className="text-white text-center font-abc">
                <p className="text-6xl font-semibold cursor-pointer">{texts[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <BodyPage />
    </div>
  );
}

export default HomePage;
