import './popular.css';

const Popular = () => {
    return (
        <div className="popular">
            <div className="popularItem">
                <img className="popularImg" src="https://cdn.pixabay.com/photo/2013/09/24/12/08/apartment-185779_960_720.jpg" alt="apartment"/>
                <span className="popularName">Apartment Sugar</span>
                <span className="popularCity">Madrid</span>
                <span className="popularPrice">starting from 345 €</span>
                <div className="popularRating">
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="popularItem">
                <img className="popularImg" src="https://cdn.pixabay.com/photo/2014/08/11/21/31/apartment-416039_960_720.jpg" alt="apartment"/>
                <span className="popularName">Unique Design Apartments</span>
                <span className="popularCity">Lisbon</span>
                <span className="popularPrice">starting from 145 €</span>
                <div className="popularRating">
                    <button>9.5</button>
                    <span>Superb</span>
                </div>
            </div>
            <div className="popularItem">
                <img className="popularImg" src="https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_960_720.jpg" alt="apartment"/>
                <span className="popularName">7Seasions Villa</span>
                <span className="popularCity">Rio de Janeiro</span>
                <span className="popularPrice">starting from 445 €</span>
                <div className="popularRating">
                    <button>8.8</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="popularItem">
                <img className="popularImg" src="https://cdn.pixabay.com/photo/2017/08/21/15/27/home-2665754_960_720.jpg" alt="apartment"/>
                <span className="popularName">Lemon apartments</span>
                <span className="popularCity">Amsterdam</span>
                <span className="popularPrice">starting from 125 €</span>
                <div className="popularRating">
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default Popular;