import React from 'react'
import { Link } from 'react-router-dom'
import { listData } from '../../lib/dummydata'
import './card.scss'
export function Card() {
  const data = listData;
  return (
    <div className='check'>
      {

        data.map(item => (
          <div className="card" key={item.id}>
            <div className='imagecontainer'>
              <img src={item.img} alt='' />
            </div>
            <div className='textcontainer'>
              <h2 className='title'>{item.title}</h2>
              <p className='address'>
                <img src='/pin.png' alt='' />
                <span>{item.address}</span>
              </p>
              <p className='price'>
              ₹{item.price}
              </p>
              <div className='bottom'>
                <div className="features">
                  <div className='feature'>
                  <img src='/bed.png' alt='' />
                  <span>{item.bedroom} bedroom</span>
                 </div>
                 <div className='feature'>
                  <img src='/bath.png' alt=''/>
                  <span>{item.bathroom} bathroom</span>
                </div>
                </div>
                <div className='icons'>
                  <div className='icon'>
                    <img src='/save.png' alt=''/>
                  </div>
                  <div className='icon'>
                    <img src='/chat.png' alt=''/>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        ))

      }
    </div>
  )
}

