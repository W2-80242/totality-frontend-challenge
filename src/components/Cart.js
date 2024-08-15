import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateBookingDays }) => {
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.bookingDays, 0);

  return (
    <div className="cart">
  <h2>Your Cart</h2>
  {cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price} per night</p>
      <p>Booking Days: {item.bookingDays}</p>
      <button onClick={() => updateBookingDays(item.id, item.bookingDays + 1)}>Increase Days</button>
      <button onClick={() => updateBookingDays(item.id, item.bookingDays - 1)} disabled={item.bookingDays <= 1}>Decrease Days</button>
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  ))}
  <h3 className="cart-total">Total: ${totalCost}</h3>
</div>
  );
};

export default Cart;
