import React, { useState, useEffect } from 'react';
import property1 from '../assets/property1.jpg'; 
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';
import property4 from '../assets/property4.jpg';
import property5 from '../assets/property5.jpg';
import property6 from '../assets/property6.jpg';

const PropertyList = ({ addToCart }) => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({ location: '', priceRange: '', bedrooms: '' });

  useEffect(() => {
    
    const fetchProperties = async () => {
      const mockProperties = [
        { id: 1, image: property1, title: 'Luxury Villa', description: 'Beautiful villa by the sea.', price: 500, bedrooms: 3, location: 'Delhi' },
        { id: 2, image: property2, title: 'Cozy Apartment', description: 'City apartment.', price: 200, bedrooms: 2, location: 'Jaipur' },
        { id: 3, image: property3, title: 'Mountain Cabin', description: 'Relaxing cabin in the mountains.', price: 300, bedrooms: 4, location: 'Chandigarh' },
        { id: 4, image: property4, title: 'Deluxe Rooms', description:'Best All Services in your room', price: 600, bedrooms: 5, location: 'Delhi'},
        { id: 5, image: property5, title: 'Super Cozy Beds', description:'Best Stay in the city', price: 300, bedrooms: 4, location: 'Jaipur'},
        { id: 6, image: property6, title: 'Lake View', description: 'Best Lake View from Room', price: 400, bedrooms: 3, location: 'Chandigarh'},
      ];
      setProperties(mockProperties);
    };
    
    fetchProperties();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.location === '' || property.location.includes(filters.location)) &&
      (filters.priceRange === '' || property.price <= parseInt(filters.priceRange)) &&
      (filters.bedrooms === '' || property.bedrooms >= parseInt(filters.bedrooms))
    );
  });

  return (
    <div>
      <div className="filter-container">
      <input name="location" placeholder="Location" onChange={handleFilterChange} />
      <input name="priceRange" placeholder="Max Price" onChange={handleFilterChange} />
      <input name="bedrooms" placeholder="Min Bedrooms" onChange={handleFilterChange} />
    </div>
      <div className="property-list">
  {filteredProperties.map((property) => (
    <div key={property.id} className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>${property.price} per night</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  ))}
</div>

    </div>
  );
};

export default PropertyList;
