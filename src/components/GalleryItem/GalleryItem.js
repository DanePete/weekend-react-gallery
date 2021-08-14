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
    console.log('hello');
  }


  return (

    <>
      <div key={id} className='col-sm-4'>
        <div className='card'>
          <div class="description-image-container">
            <div class="descriptions hidden">BLAG BLAG</div>
            <img onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)} className='card-img-top' src={path} alt='Card image cap'></img>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>dane</h5>
            <div className='card-text'>
              {description} <br />
              {likes}
            </div>
            <button onClick={markItLiked} className='btn btn-primary'>LIKE</button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default GalleryItem;
