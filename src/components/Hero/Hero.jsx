import React, { useState, useEffect } from "react";
import './style.css';
import countriesData from './country.json'; // Your countries data
import Modal from './modal'; // Ensure the correct import

const Hero = () => {
  const [searchText, setSearchText] = useState('');
  const [matches, setMatches] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setIsOpen(true); // Open the list whenever input changes
  };

  const handleInputClick = () => {
    setIsOpen(true); // Open the list when input is clicked
  };

  const closeList = (e) => {
    if (!e.target.closest("#match-list")) {
      setIsOpen(false); // Close the list when clicking outside the input
    }
  };

  const handleClickMatch = (match) => {
    setSearchText(match.name.he);
    setIsOpen(false); // Close the list when a match is clicked
    setSelectedCountry(match.code); // Set the selected country code
    fetchPackages(match.code); // Fetch packages for the selected country
  };

  const fetchPackages = async (countryCode) => {
    try {
      const response = await fetch(`https://apipck.flyingisr.com/api/deal/inEffectLanding/byDest/${countryCode}`, {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,ar-JO;q=0.8,ar;q=0.7",
          "agency": "2a3c58b3-8b0a-415d-8d5c-fc4aa2fa3ad0",
          "cache-control": "no-cache",
          "origin": "https://www.flying.co.il",
          "pragma": "no-cache",
          "priority": "u=1, i",
          "referer": "https://www.flying.co.il/",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "staging": "true",
          "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
        }
      });
      if (response.ok) {
        const data = await response.json();
        setPackages(data); // Update packages state with fetched data
        setIsModalOpen(true); // Open the modal
      } else {
        console.error('Failed to fetch travel packages:', response.status);
      }
    } catch (error) {
      console.error('Error fetching travel packages:', error);
    }
  };

  useEffect(() => {
    if (searchText.trim() === '') {
      setMatches([]);
      return;
    }

    const filteredCountries = countriesData.filter(country => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return country.name.he.match(regex);
    });
    setMatches(filteredCountries);
  }, [searchText]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black/20 h-full" onClick={closeList}>
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p dir="rtl" data-aos="fade-up" className="text-sm">חבילות</p>
            <p dir="rtl" data-aos="fade-up" data-aos-delay="300" className="font-bold text-3xl">חפש את היעד שלך</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="space-y-4 bg-white rounded-md p-4 relative">
            <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70" dir="rtl">חפש את היעד שלך</label>
                <input
                  type="text"
                  name="search"
                  id="destination"
                  placeholder="דובאי"
                  value={searchText}
                  onChange={handleSearchChange}
                  onClick={handleInputClick}
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
                {isOpen && (
                  <div id="match-list">
                    {matches.map(match => (
                      <ul key={match.id} onClick={() => handleClickMatch(match)}>
                        <li>{match.name.he} ({match.countryName.he}) , {match.code}</li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label dir="rtl" htmlFor="destination" className="opacity-70">תאריך</label>
                <input
                  type="date"
                  name="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div dir="rtl" className="w-full flex justify-between items-center">
                    <p>מחיר מקסימאלי</p>
                    <p className="font-bold text-xl">$ {30}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    step="10"
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
              onClick={() => fetchPackages(selectedCountry)} // Call fetchPackages with selected country code
              disabled={!selectedCountry} // Disable the button if no country is selected
            >
              חפש
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} packages={packages} /> {/* Pass packages to Modal component */}
    </div>
  );
};

export default Hero;
