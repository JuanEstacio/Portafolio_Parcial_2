import React from 'react';
import tarea1 from '../Img/Tarea-1.jpg';
import tarea2 from '../Img/Tarea-2.jpg';
import tarea3 from '../Img/Tarea-3.jpg';
import tarea4 from '../Img/Tarea-4.jpg';
import tarea5 from '../Img/Tarea-5.jpg';
import './Portfolio';

const Portfolio = () => {
    return (
      <div className="container-Tareas">
        <a href="https://youtu.be/n9cZILzJYBY">
          <img src={tarea1} alt="Tarea 1" className="img-galeria" />
        </a>
        <a href="https://github.com/JuanEstacio/Tarea_1.git">
          <img src={tarea2} alt="Tarea 2" className="img-galeria" />
        </a>
        <a href="https://github.com/edwinmgallego/clase-practica-css/tree/Estacio/Juan_Estacio/Tarea_2">
          <img src={tarea3} alt="Tarea 3" className="img-galeria" />
        </a>
        <a href="https://github.com/JuanEstacio/Tarea-Contador.git">
          <img src={tarea4} alt="Tarea 4" className="img-galeria" />
        </a>
        <a href="https://github.com/JuanEstacio/Class_10.git">
          <img src={tarea5} alt="Tarea 5" className="img-galeria" />
        </a>
      </div>
    );
  };
  
  export default Portfolio;