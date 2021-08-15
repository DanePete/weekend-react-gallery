import React from 'react';
import './galleryitem.css'


function GalleryItem({path, id, likeImage, description, fetchList, likes}) {

  const markItLiked = () => {
    likeImage(id);
  }

  let [over,setOver]=React.useState(false);
  
  return (
    <>
      <div key={id} className='col-sm-4'>
        <div className='card'>
          <div onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}  class="description-image-container">
            <div className={over ? 'visible': 'hidden'}>{description}</div>
            <img className='card-img-top' src={path} alt='Card image cap'></img>
          </div>
          <div className='card-body'>
            <div className='card-text'></div>
            <button onClick={markItLiked} type="button" class="btn btn-primary">
            Like <span class="badge badge-light">{likes}</span>
            </button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default GalleryItem;
