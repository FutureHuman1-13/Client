import React from 'react';
import { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className='hero-section'>
                <p>Welcome to</p>
                <h1>Future Human Home Page!</h1>
            </div>
        </>
    )
}
const About = () => {
    return (
        <>
            <div className='hero-section'>
                <p>Welcome to</p>
                <h1>Future Human About Page!</h1>
            </div>
        </>
    )
}
const Contact = () => {
    return (
        <>
            <div className='hero-section'>
                <p>Welcome to</p>
                <h1>Future Human Contact Page!</h1>
            </div>
        </>
    )
}
const Services = () => {
    return (
        <>
            <div className='hero-section'>
                <p>Welcome to</p>
                <h1>Future Human Services Page!</h1>
            </div>
        </>
    )
}



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                {/* 1st logo part */}
                <div className='logo'>
                    <h2>
                        <span>F</span>uture
                        <span>H</span>uman
                    </h2>
                </div>
                {/* 2nd Menu Part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                    </ul>
                </div>
                {/* social media links */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li><a href='https://www.youtube.com/' target="_kush"><FaYoutubeSquare className='youtube' /></a></li>
                        <li><a href='https://www.instagram.com/' target="_kush"><FaInstagramSquare className='instagram' /></a></li>
                        <li><a href='https://www.facebook.com/' target="_kush"><FaFacebookSquare className='facebook' /></a></li>
                    </ul>
                    {/* hamburger menu */}
                    <div className='hamburger-menu'>
                        <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
            {/* body Section */}
            {/* <div className='hero-section'>
                <p>Welcome to</p>
                <h1>Future Human</h1>
            </div> */}
        </>
    )
}

export default Navbar;
export {Home,About,Contact,Services};