import React from 'react';
import { useCart } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  // Consumimos la función para agregar al carrito desde el Context
  const { agregarAlCarrito } = useCart();

  const formatearMoneda = (valor) => valor.toLocaleString('es-CL');

  const handleAnadir = () => {
    agregarAlCarrito({ id, name, price, ingredients, img, desc });
  };

  return (
    <div className="tarjeta-pizza">
      <img src={img} alt={`Imagen de pizza ${name}`} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">Pizza {name}</h3>
        <hr />
        <div className="tarjeta-ingredientes-seccion">
          <p className="texto-ingredientes-titulo">Ingredientes:</p>
          <ul className="lista-ingredientes">
            🍕{ingredients.map((ing, index) => (
              <li key={index}>{ing}{index < ingredients.length - 1 ? ',' : ''}</li>
            ))}
          </ul>
        </div>
        <hr />
        <p className="tarjeta-precio">Precio: <strong>${formatearMoneda(price)}</strong></p>
        <div className="tarjeta-botones">
          <button className="boton-ver-mas">Ver Más 👀</button>
          <button className="boton-añadir" onClick={handleAnadir}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
