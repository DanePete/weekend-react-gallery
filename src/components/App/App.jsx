import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';

function App() {
  
  let [imageGallery, setImageGallery] = useState([]);

  /**
   * Fetches shopping list on load
   */
  useEffect(() => {
    fetchList();
  }, []);

  /**
   * Fetch List
   * axios request to get all litems
   */
  const fetchList = () => {
    axios.get('/gallery').then((response) => {
      console.log(response.data);
      setImageGallery(response.data);
    }).catch(error => {
      console.log('POST /list failed', error);
    })
  }

  const likeImage = (id) => {
    console.log('This is the id', id);

    axios({
        method: 'PUT',
        url: `/gallery/${id}`
    }).then(response => {
        console.log('marked item purchased');
    }).catch(error => {
        console.log('PUT error', error);
    })
}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Gallery 
          imageGallery={imageGallery}
          likeImage={likeImage}
        />
      </div>
    );
}

export default App;
