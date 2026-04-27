import React, { useState } from 'react';
import { pizzaCart } from '../components/Pizzas';

const Cart = () => {
  // Estado para manejar el carrito
  const [carrito, setCarrito] = useState(pizzaCart);

  // Función para incrementar cantidad
  const incrementarCantidad = (id) => {
    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCarrito(nuevoCarrito);
  };

  // Función para decrementar cantidad (y eliminar si llega a 0)
  const decrementarCantidad = (id) => {
    const nuevoCarrito = carrito
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);
    setCarrito(nuevoCarrito);
  };

  // Cálculo del total
  const totalCompra = carrito.reduce(
    (acumulador, item) => acumulador + item.price * item.count,
    0
  );

  return (
    <div className="carrito-contenedor">
      <h2>Detalles del pedido:</h2>
      <div className="carrito-lista">
        {carrito.map((item) => (
          <div key={item.id} className="carrito-item">
            <div className="carrito-info-basica">
              <img src={item.img} alt={item.name} className="carrito-img" />
              <span className="carrito-nombre">Pizza {item.name}</span>
            </div>
            
            <div className="carrito-controles">
              <span className="carrito-precio-unitario">
                ${(item.price * item.count).toLocaleString('es-CL')}
              </span>
              <button 
                className="btn-cantidad btn-restar"
                onClick={() => decrementarCantidad(item.id)}
              >
                -
              </button>
              <span className="cantidad-texto">{item.count}</span>
              <button 
                className="btn-cantidad btn-sumar"
                onClick={() => incrementarCantidad(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carrito-total-seccion">
        <h3>Total: ${totalCompra.toLocaleString('es-CL')}</h3>
        <button className="btn-pagar">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;