import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
        	<h1 className="logo">Gregg <span className="last-name">Fine</span></h1>
            {/* <div></div> */}
            <ul className="nav-links">
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;