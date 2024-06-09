import { Searchbar } from '../../components/searchbar/searchbar'
import './homepage.scss'
export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Our real estate web application offers a seamless platform
                        for users to buy, sell, and rent properties with ease. It
                        features advanced search filters, detailed property listings,
                        and an intuitive user interface.
                    </p>
                    <Searchbar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Ready properties</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src='bg.png' alt='' />
            </div>
        </div>
    )
}
