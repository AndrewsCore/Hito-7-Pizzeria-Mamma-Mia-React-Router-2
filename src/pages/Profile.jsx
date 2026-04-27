import React from 'react';

const Profile = () => {
  return (
    <div className="formulario-contenedor" style={{ minHeight: '60vh' }}>
      <div className="formulario-card text-center" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Mi Perfil</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '1.2rem', color: '#495057' }}>
            <strong>Email:</strong><br />
            usuario_estatico@ejemplo.com
          </p>
        </div>
        
        <button className="boton-submit" style={{ backgroundColor: '#dc3545', margin: '0 auto', display: 'block' }}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;