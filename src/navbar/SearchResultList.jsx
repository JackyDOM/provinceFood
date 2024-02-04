import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SearchResultList({ result }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const handleItemClick = (item) => {
    const path = getPathForItem(item);
    const state =
      item.type === 'cafe'
        ? { selectedImageCafe: item }
        : item.type === 'hotel'
        ? { selectedImageHotel: item }
        : { selectedImageFood: item };
    navigate(path, { state });
  };

  const getPathForItem = (item) => {
    if (item.type === 'cafe') {
      return `/cafeData`;
    } else if (item.type === 'hotel') {
      return `/hotelData`;
    } else if (item.type === 'foodProvince') {
      return `/data`;
    }
  };

  useEffect(() => {
    // Hide SearchResultList when navigating to a different path
    setIsHidden(true);
  }, [location.pathname]);

  useEffect(() => {
    // Show SearchResultList when search results are updated
    setIsHidden(false);
  }, [result]);

  return (
    !isHidden && result && result.length > 0 ? (
      <div className='result-list bg-gray-800 p-4 rounded-md shadow-md absolute left-0 mt-2 w-full z-10'>
        {result.map((item) => (
          <div key={item.id} className='text-white my-2 hover:text-red-500 cursor-pointer'>
            <div onClick={() => handleItemClick(item)}>{item.name}</div>
          </div>
        ))}
      </div>
    ) : null
  );
}

export default SearchResultList;
