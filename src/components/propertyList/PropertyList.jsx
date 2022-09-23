import './propertylist.css';

const PropertyList = () => {
    return (
        <div className="propertyList">
            <div className="propertyListItem">
                <img className="propertyListImg" src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_960_720.jpg" alt="hotel"/>
                <div className="propertyListTitles">
                    <h1>Hotels</h1>
                    <h2>234 hotels</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img className="propertyListImg" src="https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_960_720.jpg" alt="apartment"/>
                <div className="propertyListTitles">
                    <h1>Apartments</h1>
                    <h2>455 apartments</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img className="propertyListImg" src="https://cdn.pixabay.com/photo/2018/10/01/00/52/roof-top-pool-3715118_960_720.jpg" alt="resort"/>
                <div className="propertyListTitles">
                    <h1>Resorts</h1>
                    <h2>89 resorts</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img className="propertyListImg" src="https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_960_720.jpg" alt="villa"/>
                <div className="propertyListTitles">
                    <h1>Villas</h1>
                    <h2>115 villas</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img className="propertyListImg" src="https://cdn.pixabay.com/photo/2021/07/25/06/26/glamping-6490987_960_720.jpg" alt="glamping"/>
                <div className="propertyListTitles">
                    <h1>Glamping</h1>
                    <h2>77 glamping sites</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList;