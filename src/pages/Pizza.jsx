import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    const obtenerDetallePizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener el detalle:", error);
      }
    };

    obtenerDetallePizza();
  }, [id]);

  if (!pizza) return <div className="cargando">Cargando detalles de la pizza...</div>;

  return (
    <div className="pizza-detalle-contenedor">
      <div className="pizza-detalle-card">
        <img src={pizza.img} alt={pizza.name} className="pizza-detalle-img" />
        <div className="pizza-detalle-info">
          <h2 className="pizza-detalle-nombre text-capitalize">{pizza.name}</h2>
          <p className="pizza-detalle-desc">{pizza.desc}</p>
          <div className="pizza-detalle-ingredientes">
            <strong>Ingredientes:</strong>
            <ul>
              {pizza.ingredients?.map((ingrediente, index) => (
                <li key={index} className="text-capitalize">🍕 {ingrediente}</li>
              ))}
            </ul>
          </div>
          <h3 className="pizza-detalle-precio">Precio: ${pizza.price?.toLocaleString('es-CL')}</h3>
          <button
            className="boton-añadir-detalle"
            onClick={() => agregarAlCarrito(pizza)}
          >
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
