import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './assets/Components/Header/Header';
import AboutMe from './assets/Components/About/AboutMe';
import Portfolio from './assets/Components/Portafolio/Portfolio';
import Footer from './assets/Components/Footer/Footer';
import ImageToGalley from './assets/Components/GalleryImages/ImageToGallery ';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <AboutMe/>
    <ImageToGalley/>
    <Footer/>
    </>
  )
}

export default App
