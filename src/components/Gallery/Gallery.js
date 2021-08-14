import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function Gallery({imageGallery, likeImage, fetchList}) {
    return (
      <div className="row">
        {imageGallery.map(itemIndividual => 
        (
            <GalleryItem 
              path = {itemIndividual.path}
              id = {itemIndividual.id}
              likeImage = {likeImage}
              description = {itemIndividual.description}
              fetchList = {fetchList}
              likes = {itemIndividual.likes}
            />
        ))}
      </div>
    );
}

export default Gallery;
