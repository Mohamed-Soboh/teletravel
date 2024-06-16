import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'
import "leaflet/dist/leaflet.css";
const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div dir="rtl" className="container my-4">
          <h1 className="inline-block border-r-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            משרד שלנו נמצא
          </h1>

          <div className="map-wrap">
          <MapContainer center={[32.856404, 35.176079]} zoom={16}>
            <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[32.856404, 35.176079]}>
              <Popup> </Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
      </section>
    </>
  );
};

export default Location;
