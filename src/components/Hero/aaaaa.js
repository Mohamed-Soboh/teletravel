// PackageDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = ({ packages }) => {
  const { id } = useParams();
  const pkg = packages.find(pkg => pkg.id === parseInt(id));

  if (!pkg) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      <h1>{pkg.dealName}</h1>
      <p>מתאריך {pkg.departureDate} עד {pkg.arrivalDate}</p>
      <p><strong>מחיר אדם:</strong> ${parseInt(pkg.discountedAvgPrice) + 80}</p>
      <p><strong>Duration:</strong> {pkg.duration} days</p>
      <div className="gallery">
        {pkg.galleryUrl.map((url, index) => (
          <img key={index} className="gallery-image" src={url} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;
