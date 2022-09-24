import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MainList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Hotel = () => {

    const gallery = [
        {
            src: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg"
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg"
        },
        {
            src: "https://cdn.pixabay.com/photo/2016/11/29/08/42/frame-1868498_960_720.jpg"
        },
        {
            src: "https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg"
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_960_720.jpg"
        }
    ]
    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNowButton">Reserve or book now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Street name 1234 Lisbon</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 600m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over EUR 114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        { gallery.map(photo => (
                            <div className="hotelImageWrapper">
                                <img src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>

                    <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">Stay in the heart of Lisbon</h1>
                                <p className="hotelDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a 9-night stay!</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                <h2>
                                    <b>EUR 945</b> (9 nights)
                                </h2>
                                <button>Reserve or book now!</button>
                            </div>
                    </div>
                </div>
                <MainList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel;