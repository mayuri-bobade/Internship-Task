import React from 'react';

function Card({ name, price, description, category }) {
  return (
    <div style={styles.card}>
      <div style={styles.badge}>{category}</div>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.description}>{description || 'No description available.'}</p>
      <p style={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
}

const styles = {
  card: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  badge: {
    background: '#4f46e5',
    color: '#fff',
    fontSize: '12px',
    padding: '3px 10px',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '10px',
  },
  name: {
    margin: '0 0 8px',
    fontSize: '18px',
    color: '#111',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '12px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4f46e5',
    margin: 0,
  },
};

export default Card;