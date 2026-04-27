import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de React Router

const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatearMoneda = (valor) => valor.toLocaleString('es-CL');

  return (
    <nav id="barra-navegacion" className="navbar-contenedor">
      <div className="navbar-seccion-izquierda">
        <span className="navbar-logo">Pizzería Mamma Mia!</span>
        
        {/* Reemplazamos los botones por Links */}
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
        {/* El total ahora redirige al carrito */}
        <Link to="/cart" className="boton-total" style={{ textDecoration: 'none' }}>
          🛒 Total: ${formatearMoneda(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;