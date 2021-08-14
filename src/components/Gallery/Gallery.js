import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function Gallery({imageGallery, likeImage}) {
    return (
      <div className="row">
        {imageGallery.map(itemIndividual => 
        (
            <GalleryItem 
              path = {itemIndividual.path}
              id = {itemIndividual.id}
              likeImage = {likeImage}
            />
        ))}
      </div>
    );
}

export default Gallery;
