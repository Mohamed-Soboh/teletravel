import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './PackageDetails.css';
const PackageDetails = () => {
  const location = useLocation();
  const [packageData, setPackageData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const params = {
      packId: searchParams.get('packId'),
      laId: searchParams.get('hotelId'),
      dateFrom: searchParams.get('departureDate'),
      flights: searchParams.get('flightIds'),
      langCode: searchParams.get('langCode'),
      dealTypeCode: searchParams.get('dealTypeCode'),
      channel: searchParams.get('channel'),
      dealId: searchParams.get('id'),
      adult: searchParams.get('adult'),
      child: searchParams.get('child'),
      infant: searchParams.get('infant'),
      categoryId: searchParams.get('categoryId'),
      roomClass: searchParams.get('roomClass'),
      roomType: searchParams.get('roomType'),
    };

    const fetchPackage = async () => {
      try {
        const response = await fetch(`https://apipck.flyingisr.com/api/operation/select?${new URLSearchParams(params).toString()}`, {
          headers: {
            'accept': "application/json, text/plain, */*",
            'accept-language': "en-US,en;q=0.9,ar-JO;q=0.8,ar;q=0.7",
            'agency': "2a3c58b3-8b0a-415d-8d5c-fc4aa2fa3ad0",
            'cache-control': "no-cache",
            'origin': "https://www.flying.co.il",
            'pragma': "no-cache",
            'priority': "u=1, i",
            'referer': "https://www.flying.co.il/",
            'sec-fetch-dest': "empty",
            'sec-fetch-mode': "cors",
            'sec-fetch-site': "cross-site",
            'staging': "true",
            'user-agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPackageData(data);
      } catch (error) {
        console.error('Error fetching package data:', error);
      }
    };

    if (params.packId) {
      fetchPackage();
    }
  }, [location.search]);

  if (!packageData) {
    return <div>Loading...</div>;
  }

  const hotel = packageData.hotels[0];
  const image = packageData.galleryUrls;

  if (!hotel) {
    return <div>No hotel data available</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === image.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? image.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div dir="rtl" className="container pt-14">
        <div className="py-10">
          <h1 className="border-4 border-yellow-200 border-x-yellow-500 ... text-3xl font-bold text-center"> 
            {hotel.hotelName || 'No Hotel Name'}
          </h1>
          <p> { hotel.desc || 'No Description Available'}</p>
          <p>מתאריך {hotel.date_arr_from || 'N/A'} עד {hotel.date_arr_to || 'N/A'}</p>
          <p><strong>מחיר אדם:</strong> ${hotel.Price || 'N/A'}</p>
          <p><strong>Duration:</strong> {hotel.duration || 'N/A'} days</p>
          <div className="gallery">
            {image && image.length > 0 ? (
              <div className="gallery-container">
                <button className="gallery-arrow left" onClick={prevImage}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img className="gallery-image" src={image[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <button className="gallery-arrow right" onClick={nextImage}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
