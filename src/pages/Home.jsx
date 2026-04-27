import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const consultarPizzas = async () => {
      try {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
        setLoading(false);
      }
    };

    consultarPizzas();
  }, []);

  if (loading) {
    return <div className="text-center" style={{ padding: '100px', fontSize: '1.5rem' }}>Cargando el menú de Mamma Mía...</div>;
  }

  return (
    <>
      <Header />
      <div className="contenedor-grilla-pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </>
  );
};

export default Home;