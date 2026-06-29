import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

const API_URL = 'http://localhost:5000/api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      setError('Failed to fetch products. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  // Seed a sample product
  const addSampleProduct = async () => {
    const sample = {
      name: 'Sample Product ' + (products.length + 1),
      price: Math.floor(Math.random() * 100) + 10,
      description: 'A great product for everyone.',
      category: 'Electronics',
    };
    try {
      await axios.post(API_URL, sample);
      fetchProducts();
    } catch (err) {
      setError('Failed to add product.');
    }
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>🛒 Product Catalog</h1>
      <p style={styles.sub}>Fetched from Express + MongoDB API</p>

      <button onClick={addSampleProduct} style={styles.button}>
        + Add Sample Product
      </button>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={styles.grid}>
        {products.map((product) => (
          <Card
            key={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>

      {!loading && products.length === 0 && (
        <p style={{ color: '#888' }}>No products yet. Click the button to add one!</p>
      )}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: '#111',
    marginBottom: '8px',
  },
  sub: {
    color: '#777',
    marginBottom: '24px',
  },
  button: {
    background: '#4f46e5',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    marginBottom: '32px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
};

export default App;