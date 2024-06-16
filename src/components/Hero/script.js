// script.js

// Function to fetch countries from countries.json
async function fetchCountries() {
    try {
      const response = await fetch('country.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }
  
  // Function to open country list
  async function openCountryList() {
    const countries = await fetchCountries();
    const countryList = document.createElement('ul');
    
    // Add each country to the list
    countries.forEach(country => {
      const listItem = document.createElement('li');
      listItem.textContent = country.name.he;
      countryList.appendChild(listItem);
    });
  
    // Clear previous list (if any) and append new list
    const destinationInput = document.getElementById('destination');
    const parentElement = destinationInput.parentElement;
    const existingList = parentElement.querySelector('ul');
    if (existingList) {
      existingList.remove();
    }
    parentElement.appendChild(countryList);
  }
  
  // Attach event listener to input field
  document.addEventListener('DOMContentLoaded', function () {
    const destinationInput = document.getElementById('destination');
    destinationInput.addEventListener('click', openCountryList);
  });
  