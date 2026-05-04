import React, { createContext, useContext, useState } from 'react';

// 1. Creamos el Context
const CartContext = createContext();

// 2. Creamos el Provider que envolverá la aplicación
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agrega una pizza al carrito. Si ya existe, incrementa su cantidad.
  const agregarAlCarrito = (pizza) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === pizza.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCarrito, { ...pizza, count: 1 }];
    });
  };

  // Decrementa la cantidad. Si llega a 0, elimina el item.
  const quitarDelCarrito = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0)
    );
  };

  // Total calculado a partir del carrito
  const total = carrito.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, total }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook personalizado para consumir el contexto fácilmente
export const useCart = () => useContext(CartContext);
