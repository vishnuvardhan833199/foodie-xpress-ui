import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-red-500">FoodieXpress</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-red-500">Home</Link>
      <Link to="/menu" className="hover:text-red-500">Menu</Link>
      <Link to="/cart" className="hover:text-red-500">Cart</Link>
      <Link to="/checkout" className="hover:text-red-500">Checkout</Link>
    </div>
  </nav>
);

export default Navbar;
