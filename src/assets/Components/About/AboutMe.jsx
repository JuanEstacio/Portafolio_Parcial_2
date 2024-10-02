import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
      <section className="container_2">
        <h1 className="conta">Sobre Mi</h1>
        <h2 className="conta">
          Tengo 19 años, Soy un estudiante de la Universidad Autónoma de Occidente de la carrera de Ingeniería Multimedia.
        </h2>
        <h3 className="conta">Habilidades:</h3>
        <ul className="skills">
          <li>Soy bueno modelando 3D</li>
          <li>Tengo un sentido natural para las animaciones</li>
          <li>Tengo buenos conocimientos sobre ciertos lenguajes de programación</li>
        </ul>
      </section>
    );
  };
  
  export default AboutMe;
