import React, { useState } from 'react';

const Checkout = ({ cartItems, clearCart }) => {
  const [checkoutDetails, setCheckoutDetails] = useState({ name: '', email: '', payment: '' });

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.bookingDays, 0);

  const handleChange = (e) => {
    setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${checkoutDetails.name}, your booking is confirmed!`);

    clearCart();
    setCheckoutDetails({ name: '', email: '', payment: '' });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={checkoutDetails.name} onChange={handleChange} />
        <input name="email" placeholder="Your Email" value={checkoutDetails.email} onChange={handleChange} />
        <input name="payment" placeholder="Payment Method" value={checkoutDetails.payment} onChange={handleChange} />
        <h3>Total: ${totalCost}</h3>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
