import React from 'react';
import './galleryitem.css'


function GalleryItem({path, id, likeImage, description, fetchList, likes}) {

  const markItLiked = () => {
    likeImage(id);
  }

  let [over,setOver]=React.useState(false);

  let visibility={
    backgroundColor:''
  }

  const mouseOver = () => {
    console.log('hey hey', over);
    <h1>hello</h1>
  }

  if(over){
    // buttonstyle.backgroundColor="green";
    
  } else {
  }


  return (

    <>
      <div key={id} className='col-sm-4'>
        <div className='card'>
          <div onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}  class="description-image-container">
            <div className={over ? 'visible': 'hidden'}>{description}</div>
            <img className='card-img-top' src={path} alt='Card image cap'></img>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{likes}</h5>
            <div className='card-text'>
              
            </div>
            <button onClick={markItLiked} className='btn btn-primary'>LIKE</button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default GalleryItem;
