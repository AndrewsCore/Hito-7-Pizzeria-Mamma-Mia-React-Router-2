import React, { useState, useEffect } from 'react';

const Pizza = () => {
  // Estado para la pizza seleccionada
  const [pizza, setPizza] = useState(null);

  // Consumimos la API al montar el componente
  useEffect(() => {
    // Definimos la función dentro del efecto para resolver advertencias de ESLint
    // y mantener la lógica de sincronización encapsulada.
    const obtenerDetallePizza = async () => {
      try {
        // Endpoint fijo para el Hito 4 (p001)
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener el detalle:", error);
      }
    };

    obtenerDetallePizza();
  }, []); // El array vacío asegura que solo se ejecute al montar

  // Renderizado condicional mientras carga la data
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
              {/* Usamos encadenamiento opcional ?. para evitar errores si ingredients es undefined */}
              {pizza.ingredients?.map((ingrediente, index) => (
                <li key={index} className="text-capitalize">🍕 {ingrediente}</li>
              ))}
            </ul>
          </div>
          <h3 className="pizza-detalle-precio">Precio: ${pizza.price?.toLocaleString('es-CL')}</h3>
          <button className="boton-añadir-detalle">Añadir al carrito 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;