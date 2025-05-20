import React from 'react';

const Menu = () => {
  const items = [
    { name: "Burger", price: "$5" },
    { name: "Pizza", price: "$8" },
    { name: "Pasta", price: "$6" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
