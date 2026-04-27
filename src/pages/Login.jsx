import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Error: Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("Error: El password debe tener al menos 6 caracteres.");
      return;
    }

    alert("¡Login exitoso!");
  };

  return (
    <div className="formulario-contenedor">
      <form className="formulario-card" onSubmit={handleLogin}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Introduce tu email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Introduce tu contraseña"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="boton-submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;