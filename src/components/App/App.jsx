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

  // const uppy = new Uppy().use(Dashboard, {
  //   inline: true,
  // });

  const likeImage = (id) => {
    console.log('This is the id', id);

    axios({
        method: 'PUT',
        url: `/gallery/${id}`
    }).then(response => {
        console.log('marked item purchased');
        fetchList();
    }).catch(error => {
        console.log('PUT error', error);
    })
  }

  return (
    <div className="App ripple-background">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div class="container">
      <div id="drag-drop-area"></div>
        <Gallery 
          imageGallery={imageGallery}
          likeImage = {likeImage}
          fetchList = {fetchList}
        />
      </div>
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle mediun shade4"></div>
      <div className="circle small shade5"></div>
    </div>
  );
}

export default App;
