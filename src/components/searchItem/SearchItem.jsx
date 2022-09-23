import './searchitem.css';


const SearchItem = () => {
    return (
        <div className="searchItem">
            <img 
            className="searchImg"
            src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg"
            alt="interior"
            />
            <div className="searchItemDescription">
                <h1 className="searchItemTitle">Design Villa</h1>
                <span className="searchItemDistance">500m from center</span>
                <span className="searchItemTaxi">Free airport taxi</span>
                <span className="searchItemSubtitle">Luxurious villa with a pool</span>
                <span className="searchItemFeatures">Entire villa • 4 bathrooms  • 6 bedrooms</span>
                <span className="searchItemCancel">Free cancelation</span>
                <span className="searchItemCancelSubtitle"> You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchItemDetailTexts">
                  <span className="searchItemPrice">EUR 489</span>
                  <span className="searchItemTax">Includes taxes and fees</span>
                  <button className="searchItemButton">See availability</button>  
                </div>
            </div>
        </div>
    )
}

export default SearchItem;