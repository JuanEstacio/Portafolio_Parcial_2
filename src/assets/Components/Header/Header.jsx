import React from 'react';
import logo from '../Img/Recurso_1.png'; // Importar imágenes en React
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="Logo" src={logo} alt="Logo" />
        <h1 className="title">Portafolio</h1>
        <h2 className="subtitle">Juan Esteban Estacio Alomia</h2>
      </div>
    </header>
  );
};

export default Header;