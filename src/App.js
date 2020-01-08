import React from 'react';
import './style.less';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import GalleryComponent from './Components/GalleryComponent';
import ModalComponent from './Components/ModalComponent';

function App() {
  return (
    <div className="wrapper">
      <ModalComponent/>
      <div className="main-page">
        <HeaderComponent/>
        <GalleryComponent/>
        <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
