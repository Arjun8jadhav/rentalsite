
import { Sider } from '../../components/sider/sider'
import './singlepage.scss'
import { singlePostData, userData } from '../../lib/dummydata'
import { Map } from '../../components/map/map'
export const Singlepage = () => {
  return (
    <div className='singlepage'>
      <div className="details">
        <div className="wrapper">
          <div className="mapp">
          <Sider images={singlePostData.images} />
          </div>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src='/pin.png' alt='' />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ₹{singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listverticle">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featuretext">
                <span>Utilities</span>
                <p>Renter is Responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featuretext">
                <span>Pet policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featuretext">
                <span>Property fees</span>
                <p>Affordable Pricing</p>
              </div>
            </div>

          </div>
          <p className="title">Sizes</p>

          <div className="listhorizontal">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>
          <p className="title">Near by places</p>
          <div className="listhorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featuretext">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featuretext">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featuretext">
                <span>Restaurent</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="location">
            <Map />
          </div>
          <div className="buttons">
            <button>
              <img src='/chat.png' alt='' />
              Send me Message
            </button>
            <button>
              <img src='/save.png' alt='' />
              Save the Place
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
