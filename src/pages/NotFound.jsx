import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '6rem', color: '#dc3545'}}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#343a40', marginBottom: '20px' }}>¡Ups! Página no encontrada</h2>
      <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '40px' }}>
        La porción de pizza que buscas no se encuentra en nuestro menú.
      </p>
      
      <Link to="/" className="boton-submit" style={{ textDecoration: 'none', padding: '15px 30px' }}>
        Volver al Inicio 🍕
      </Link>
    </div>
  );
};

export default NotFound;