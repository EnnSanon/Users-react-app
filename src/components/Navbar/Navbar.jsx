import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenButton = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="navbar">
      <h1>LOGO</h1>
      {!isOpen && 
        <div className="informacion">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
      }
      {isOpen && (
        <div className="button" onClick={handleOpenButton}>
          <div className="btn__burger"></div>
          <div className="btn__burger"></div>
          <div className="btn__burger"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
