import React from 'react';

const Bags = () => {
  const bagData = [
    { id: 1, name: 'Danbaoly', price: 12000, description: 'Luxury bag', image: '/DANBAOLY.jpeg' },
    { id: 2, name: 'Dior', price: 8000, description: 'Stylish design', image: '/Dior.jpg' },
    { id: 3, name: 'Goyard', price: 25000, description: 'Elegant piece', image: '/GOYARD.jpg' },
    { id: 4, name: 'Louis', price: 5000, description: 'Attractive and beautiful', image: '/LOUIS.png' },
    { id: 5, name: 'Loewe', price: 7000, description: 'Smart and appealing', image: '/LOEWE.png' },
    { id: 6, name: 'Parada', price: 1000, description: 'Affordable and reliable', image: '/PARADA.png' },
  ];

  return (
    <div>
      <div className="bags">
        {bagData.map((bag) => (
          <div key={bag.id} className="bag-card">
            <img src={bag.image} alt={bag.name} />
            <h3>{bag.name}</h3>
            <p>{bag.description}</p>
            <div className="price">${bag.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;