import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  // Consumimos el total directamente desde el CartContext
  const { total } = useCart();
  const token = false;

  const formatearMoneda = (valor) => valor.toLocaleString('es-CL');

  return (
    <nav id="barra-navegacion" className="navbar-contenedor">
      <div className="navbar-seccion-izquierda">
        <span className="navbar-logo">Pizzería Mamma Mia!</span>

        <Link to="/" className="boton-nav" style={{ textDecoration: 'none' }}>🍕 Home</Link>

        {token ? (
          <>
            <Link to="/profile" className="boton-nav" style={{ textDecoration: 'none' }}>🔓 Profile</Link>
            <button className="boton-nav">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="boton-nav" style={{ textDecoration: 'none' }}>🔐 Login</Link>
            <Link to="/register" className="boton-nav" style={{ textDecoration: 'none' }}>🔐 Register</Link>
          </>
        )}
      </div>
      <div className="navbar-seccion-derecha">
        <Link to="/cart" className="boton-total" style={{ textDecoration: 'none' }}>
          🛒 Total: ${formatearMoneda(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
