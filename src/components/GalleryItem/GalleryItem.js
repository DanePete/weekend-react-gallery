import React from 'react';

function GalleryItem({path, id, likeImage}) {

  const markItLiked = () => {
    likeImage(id);
  }

    return (
      <>
        <div key={id} className='col-sm-6'>
          <div className='card'>
            <img className='card-img-top' src={path} alt='Card image cap'></img>
            <div className='card-body'>
              <h5 className='card-title'>dane</h5>
              <div className='card-text'>
                Blah Blah Blah Blah
              </div>
              <button onClick={markItLiked} className='btn btn-primary'>CLICK ME</button>
            </div>
          </div>  
        </div>
      </>
    );
}

export default GalleryItem;
