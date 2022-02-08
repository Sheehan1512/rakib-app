import React, { useState } from 'react';
import './App.css';
import LeftColumn from '../LeftColumn/LeftColumn';
import RightColumn from '../RightColumn/RightColumn';
import Modal from '../Modal/Modal';

function App() {
  
  const [showModal,setShowModal] = useState(false);

  function handleClose() {
    setShowModal(false);
  }

  function handleOpen() {
    setShowModal(true);
  }

  return(
    <>
      <section className="container">
        <LeftColumn handleOpen={handleOpen} />
        <RightColumn />
      </section>
      {showModal && 
        <Modal handleClose={handleClose}>
          <h1>Modal</h1>
          <p>Modal hote chao?"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Modal>
      }
    </>
  );
}

export default App;
