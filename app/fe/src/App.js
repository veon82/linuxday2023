import React, { useState, useEffect } from 'react';
import AddDistroForm from './AddDistroForm';
import { addDistro, fetchDistros } from './apiService';

import logo from './logo.png';
import backgroundImage from './background.jpg';
import './App.css';

function App() {
  const [distros, setDistros] = useState([]);

  useEffect(() => {
    const loadDistros = async () => {
      try {
        const fetchedDistros = await fetchDistros();
        setDistros(fetchedDistros);
      } catch (error) {
        console.error("Error fetching distros:", error);
      }
    };

    loadDistros();
  }, []);

  const handleAddDistro = async (distro) => {
    try {
      const addedDistro = await addDistro(distro);
      setDistros(prevDistros => [...prevDistros, addedDistro]);
    } catch (error) {
      console.error("Error adding distro:", error);
    }
  };

  const containerStyle = {
    maxWidth: '2048px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '100vh',
    width: '100vw',
    overflowY: 'hidden',
  };

  const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundImage: 'url(https://pdp.linux.it/wp-content/themes/twentythirteen/images/headers/diamond.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  const logoStyle = {
    height: '40px',
  };

  const textStyle = {
    color: 'white',
  }

  return (

    <div style={containerStyle}>
      <div style={toolbarStyle}>
        <div><h1>Linux Day 2023 (Fabriano) - k3s Demo App</h1></div>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>

      <AddDistroForm onAdd={handleAddDistro} />

      <ul>
        {distros.map(distro => (
          <li style={textStyle} key={distro.id}>
            {distro.name} - {distro.description} - {distro.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

