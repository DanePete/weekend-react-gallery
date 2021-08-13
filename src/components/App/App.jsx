import React, {useState, useEffect} from 'react';
import './App.css';
import getGallery from '../../endpoints/getGalleryList';

function App() {

  useEffect(() => {
    console.log('in useEffect')
    getGallery();
  }, []);

    return (
      <div className="App">
        {getGallery()}
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
