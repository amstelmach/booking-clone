import './navbar.css';

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="navContainer">
                <span className="logo">booking clone</span>
                <div className="navItems">
                    <button className="navButton">login</button>
                    <button className="navButton">register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;