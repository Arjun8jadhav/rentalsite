import React from 'react'
import { listData } from '../../lib/dummydata'
import './list.scss'
import { Map } from '../../components/map/map';
import { Filter } from '../../components/filter/filter';
import { Card } from '../../components/card/card';
export const List = () => {
  const data=listData;
  return (
    <div className='listpage'>
      <div className="listcontainer">
          <div className="wrapper">
            <Filter/>
            <Card/>
          </div>
      </div>
      <div className="mapcontainer">
           <Map/>
      </div>
    </div>
  )
}
