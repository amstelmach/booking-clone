import './maillist.css';

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDescription">Sign up and we'll send the best deals to you</span>
            <div className="mailInput">
                <input type="text" placeholder="Your email"/>
                <button className="mailButton">Subscribe</button>
            </div>
        </div>
    )
}

export default MailList;