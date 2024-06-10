import './map.scss'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { listData } from '../../lib/dummydata';
import { Link } from 'react-router-dom';
export const Map = () => {
    const data = listData;
    return (
        <div className='fixed'>
            <MapContainer center={[51.505, -0.9]} zoom={7} scrollWheelZoom={true} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.map((item) => {
                        return (
                            <Marker position={[item.latitude, item.longitude]} key={item.id}>
                                <Popup>
                                    <div className='popupcontainer'>
                                        <img src={item.img} alt='' />
                                        <div className='textcontainer'>
                                           <Link to={`/${item.id}`}>{item.title}</Link>
                                           <span className='bedroom'>{item.bedroom} bedroom</span>
                                           <b>$ {item.price}</b>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    )
}
