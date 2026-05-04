import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  // Consumimos el carrito, funciones y total desde el CartContext
  const { carrito, agregarAlCarrito, quitarDelCarrito, total } = useCart();

  return (
    <div className="carrito-contenedor">
      <h2>Detalles del pedido:</h2>

      {carrito.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: '#6c757d' }}>
          Tu carrito está vacío. ¡Agrega pizzas desde el menú! 🍕
        </p>
      ) : (
        <>
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
                    onClick={() => quitarDelCarrito(item.id)}
                  >
                    -
                  </button>
                  <span className="cantidad-texto">{item.count}</span>
                  <button
                    className="btn-cantidad btn-sumar"
                    onClick={() => agregarAlCarrito(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-total-seccion">
            <h3>Total: ${total.toLocaleString('es-CL')}</h3>
            <button className="btn-pagar">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
