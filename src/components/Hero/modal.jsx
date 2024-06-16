import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './modal.css'; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const extractHotelName = (dealName) => {
  const pattern = />([^>]+)$/;
  const match = dealName.match(pattern);
  if (match) {
    return match[1].trim();
  } else {
    return dealName;
  }
};

const Modal = ({ isOpen, onClose, packages }) => {
  if (!isOpen) return null;

  const [currentImageIndices, setCurrentImageIndices] = useState(Array(packages.length).fill(0));

  const nextImage = (index) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] === packages[index].galleryUrl.length - 1) ? 0 : newIndices[index] + 1;
      return newIndices;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] === 0) ? packages[index].galleryUrl.length - 1 : newIndices[index] - 1;
      return newIndices;
    });
  };

  const constructUrlWithParams = (pkg) => {
    const url = new URL('/packages/select', window.location.origin);
    url.searchParams.append('packId', pkg.packageId);
    url.searchParams.append('hotelId', pkg.hotelId);
    url.searchParams.append('departureDate', pkg.departureDate);
    url.searchParams.append('flightIds', pkg.flightIds);
    url.searchParams.append('langCode', 'HEB');
    url.searchParams.append('dealTypeCode', pkg.dealTypeCode);
    url.searchParams.append('channel', 'LandingPage');
    url.searchParams.append('id', pkg.id);
    url.searchParams.append('adult', pkg.adult);
    url.searchParams.append('child', pkg.child);
    url.searchParams.append('infant', pkg.infant);
    url.searchParams.append('categoryId', pkg.categoryId);
    url.searchParams.append('roomClass', pkg.roomClass);
    url.searchParams.append('roomType', pkg.roomType);
console.log("fdsdsfdsfdsfd"+url.toString());
    return url.toString();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2 className='h2h'>חבילות דקה-90</h2>
        <div className="packages-list">
          {packages.map((pkg, index) => (
            <Link
              to={constructUrlWithParams(pkg)}
              key={index}
              className="package-link"
            >
              <div className="package">
                <h3 className='h3h'>{extractHotelName(pkg.dealName)}</h3>
                <p>מתאריך {pkg.departureDate} עד {pkg.arrivalDate}</p>
                <p><strong>מחיר אדם:</strong> ${parseInt(pkg.discountedAvgPrice) + 80}</p>
                <p><strong>Duration:</strong> {pkg.duration} days</p>
                <div className="gallery">
                  <button className="gallery-arrow left" onClick={(e) => { e.preventDefault(); prevImage(index); }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <img className="gallery-image" src={pkg.galleryUrl[currentImageIndices[index]]} alt={`Image ${currentImageIndices[index] + 1}`} />
                  <button className="gallery-arrow right" onClick={(e) => { e.preventDefault(); nextImage(index); }}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
