import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from '../Img/Tarea-1.jpg';
import img2 from '../Img/Tarea-2.jpg';
import img3 from '../Img/Tarea-3.jpg';
import img4 from '../Img/Tarea-4.jpg';
import img5 from '../Img/Tarea-5.jpg';

const ImageToGallery = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1,
      description: "Descripción de la imagen 1",
      link: "https://youtu.be/n9cZILzJYBY",
    },
    {
      original: img2,
      thumbnail: img2,
      description: "Descripción de la imagen 2",
      link: "https://github.com/JuanEstacio/Tarea_1.git",
    },
    {
      original: img3,
      thumbnail: img3,
      description: "Descripción de la imagen 3",
      link: "https://github.com/edwinmgallego/clase-practica-css/tree/Estacio/Juan_Estacio/Tarea_2",
    },
    {
      original: img4,
      thumbnail: img4,
      description: "Descripción de la imagen 4",
      link: "https://github.com/JuanEstacio/Tarea-Contador.git",
    },
    {
      original: img5,
      thumbnail: img5,
      description: "Descripción de la imagen 5",
      link: "https://github.com/JuanEstacio/Class_10.git",
    }
  ];

// Función para manejar clic en la miniatura
const handleThumbnailClick = (event, index) => {
  const link = images[index].link;
  window.open(link, "_blank"); // Abre la URL en una nueva pestaña
};

// Función para manejar clic en la imagen principal
const handleImageClick = (event) => {
  const currentIndex = event.target.dataset.index; // Obtener el índice de la imagen actual
  const link = images[currentIndex].link;
  window.open(link, "_blank"); // Abrir el enlace en una nueva pestaña
};

return (
  <div>
    <h2>Portafolio</h2>
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      onThumbnailClick={handleThumbnailClick} // Manejar clic en la miniatura
      onClick={handleImageClick} // Manejar clic en la imagen principal
    />
  </div>
);
};

export default ImageToGallery;