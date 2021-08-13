import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';

function App() {
  
  let [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    axios.get('/gallery').then((response) => {
      console.log(response.data);
      setImageGallery(response.data);
    }).catch(error => {
      console.log('POST /list failed', error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <Gallery 
          imageGallery={imageGallery}
        />
      </div>
    );
}

export default App;
