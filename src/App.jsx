import React from 'react';
// Importaciones de componentes base
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// Importaciones comentadas según instrucciones del Hito 4 (Página 3)
// import Home from './components/Home';
// import RegisterPage from './components/Register';
// import LoginPage from './components/Login';
// import Cart from './components/Cart';
import './App.css';


const App = () => {
  return (
    <div className="app-pizzeria">
      <Navbar />      
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;