import React from 'react';
import './style.css'

const searching = (e) => {
    e.preventDefault();
    alert('you typed sth');
} 

const Navbar = props =>{
return (
    <div className = 'navbar'>
        <ul className = 'navbarMenu'>
            <li><a href = "/">Home</a></li>
            <li><a href = "/">About Us</a></li>
            <li><a href = "/">Posts</a></li>
            <li><a href = "/">Contact Us</a></li>
        </ul>
        <div className = 'search'>
            <form onSubmit = {searching}>
                <input type = 'text' placeholder = 'Search' />
                <button><img src = {require('../../assets/icons/search.png')} alt = 'search'/></button>
            </form>
        </div>
    </div>
  )
}
export default Navbar;