import React from 'react';
import facebookIcon from '../Img/Recurso_2.png';
import './Footer.css'

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <p>© 2024 Juan Esteban Estacio Alomia - Todos los derechos reservados</p>
          <a href="https://www.facebook.com/share/JVb9J89jfEkdmMRF/?mibextid=qi2Omg" target="_blank">
            <img src={facebookIcon} alt="Facebook" className="social-icon-footer" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;