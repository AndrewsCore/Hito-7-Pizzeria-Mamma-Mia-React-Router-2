import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Error: Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("Error: El password debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Error: El password y la confirmación no coinciden.");
      return;
    }

    alert("¡Registro exitoso!");
  };

  return (
    <div className="formulario-contenedor">
      <form className="formulario-card" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        
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

        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="boton-submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;