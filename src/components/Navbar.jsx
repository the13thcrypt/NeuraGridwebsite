import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Effect to close the mobile menu automatically when the page changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Effect to prevent the page from scrolling when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">NEURAGRID</NavLink>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="navbar-links desktop-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/media">Media</NavLink>
            </nav>

            {/* Hamburger Menu Button */}
            <button
                className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
            >
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </button>

            {/* Slide-in Mobile Menu */}
            <nav className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
                <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
                <NavLink to="/products" onClick={toggleMenu}>Products</NavLink>
                <NavLink to="/media" onClick={toggleMenu}>Media</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;

