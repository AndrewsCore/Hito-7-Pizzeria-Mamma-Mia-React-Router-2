import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

/**
 * Componente Home - Hito 4
 * Se encarga de obtener el listado de pizzas desde el backend 
 * y renderizarlas usando el componente CardPizza.
 */
const Home = () => {
  // Estado para almacenar el array de pizzas proveniente de la API
  const [pizzas, setPizzas] = useState([]);
  // Estado para manejar el mensaje de carga
  const [loading, setLoading] = useState(true);

  // Hook useEffect para ejecutar la consulta al servidor una sola vez
  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        
        // Guardamos los datos en el estado y finalizamos la carga
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al consumir la API de pizzas:", error);
        setLoading(false);
      }
    };

    obtenerPizzas();
  }, []);

  // Mientras la API responde, mostramos un mensaje simple
  if (loading) {
    return <div className="text-center p-5">Cargando el menú de Mamma Mía...</div>;
  }

  return (
    <>
      <Header />
      <main className="home-pizzas-container container mt-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;