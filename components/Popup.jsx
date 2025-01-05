import React, { useState } from 'react';
import Image from 'next/image';
import Starlink from "../public/Starlink.jpg"
const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.popup}>
      <button style={styles.closeButton} onClick={handleClose}>
        ✖
      </button>
        <h2>WIFI con Starlink</h2>
      <Image 
        src={Starlink} 
        alt="Starlink" 
        width={300} 
        height={170} 
        style={styles.image} 
      />
    </div>
  );
};

const styles = {
    popup: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centra el popup
        width: '320px',
        padding: '10px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        zIndex: 1000,
    },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  image: {
    borderRadius: '5px',
  },
};

export default Popup;