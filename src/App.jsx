import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Registro';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import { useUser } from './context/UserContext';
import './App.css';

// Ruta protegida: si hay token, si no a /login
const RutaPrivada = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
};

// Ruta pública exclusiva: si hay token no puede entrar (redirige a home)
const RutaSoloPublica = ({ children }) => {
  const { token } = useUser();
  return !token ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <div className="app-pizzeria">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />

        {/* Login y Register solo accesibles sin token */}
        <Route path="/login" element={<RutaSoloPublica><Login /></RutaSoloPublica>} />
        <Route path="/register" element={<RutaSoloPublica><Register /></RutaSoloPublica>} />

        {/* Profile solo accesible con token */}
        <Route path="/profile" element={<RutaPrivada><Profile /></RutaPrivada>} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
