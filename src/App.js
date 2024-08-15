import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/CheckOut'; 
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (property) => {
    const existingItem = cartItems.find(item => item.id === property.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === property.id ? { ...item, bookingDays: item.bookingDays + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...property, bookingDays: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateBookingDays = (id, days) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, bookingDays: days } : item));
  };

  return (
    <div className='container'>
      <h1>Property Rental Platform</h1>
      <PropertyList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateBookingDays={updateBookingDays} />
      {cartItems.length > 0 && <Checkout cartItems={cartItems} clearCart={clearCart} />}
    </div>
  );
};

export default App;
