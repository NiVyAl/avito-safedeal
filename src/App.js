import React from 'react';
import './style.less';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import GalleryComponent from './Components/GalleryComponent';

function App() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <GalleryComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
