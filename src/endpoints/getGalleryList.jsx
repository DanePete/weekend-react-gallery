import React, {useState, useEffect} from 'react';
import axios from 'axios';

function getGallery() {
  axios.get('/gallery').then((response) => {
    // console.log('this is the response from fetchList', response.data);
    // setShoppingListArray(response.data);
    return response.data;
  }).catch(error => {
      console.log('POST /list failed', error);
    })
}

export default getGallery;