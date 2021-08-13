import React from 'react';
import ImageGallery from 'react-image-gallery';

function Gallery({imageGallery}) {

  let images = [];
    // const itemDeleted = () => {
    //     // deleteItem(data.id)
    //     fetchList();
    // }

    // console.log('data in shopping list item component', data);
    console.log('wowza',imageGallery);
    return (
      <>
        {imageGallery.map(itemIndividual => 
        (
          images.push({original: itemIndividual.path, thumbnail: itemIndividual.path})
        ))}

        <ImageGallery items={images} />;
      </>
    
    
    );
}

export default Gallery;
