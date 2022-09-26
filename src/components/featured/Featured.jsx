import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2016/11/18/14/06/trevi-fountain-1834787_960_720.jpg" className="featuredImg" alt="Roma"/>
                <div className="featuredTitle">
                    <h1>Roma</h1>
                    <h2>326 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg" className="featuredImg" alt="Istambul"/>
                <div className="featuredTitle">
                    <h1>Istanbul</h1>
                    <h2>89 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2014/10/26/15/03/garden-by-the-bay-503897_960_720.jpg" className="featuredImg" alt="Singapore"/>
                <div className="featuredTitle">
                    <h1>Singapore</h1>
                    <h2>150 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured;