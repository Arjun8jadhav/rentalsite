import { useState } from 'react'
import './sider.scss'

export const Sider = ({ images }) => {
  const [imgindex,setimgindex]=useState(null);
  const increment=()=>{
       if(imgindex+1>=images.length){
        setimgindex(0);
       }
       else{
        setimgindex(imgindex+1)
       }
  }
  const decrement=()=>{
     if(imgindex-1<0){
      setimgindex(images.length-1);
     }
     else{
      setimgindex(imgindex-1)
     }
  }
  return (
    <div className="slider">
      {imgindex !==null && (
      <div className="fullslider">
        <div className="arrow">
          <img src='/arrow.png' alt='' onClick={decrement} />

        </div>
        <div className="imagecontainer">
           <img src={images[`${imgindex}`]} alt=''/>
        </div>
        <div className="arrow">
          <img src='/arrow.png' className='right' onClick={increment} alt='' />
        </div>
        <div className="close" onClick={()=>setimgindex(null)}>X</div>
      </div>)
      }
      <div className="bigimg">
        <img src={images[0]} alt='' onClick={()=>setimgindex(0)} />
      </div>
      <div className="smallimg">

        {images.slice(1).map((image, index) => {
          return (
            <img src={image} alt='' key={index} />
          )
        })}
      </div>
    </div>
  )
}
