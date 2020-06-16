import React from 'react';
import './style.css'
const Header = props =>{
    return(
        <header className = 'header'>
            <nav className = 'header-menu'>
                <a href = '/'>Home</a>
                <a href = '/About'>About Us</a>
                <a href = '/Contact'>Contact Us</a>
            </nav>
            <div>
                Social media links
            </div>
        </header>
    )
}
export default Header;