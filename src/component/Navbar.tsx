import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <a href="#home">Chanya: Grace</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li className="dropdown">
                    <a href="#contact">Contact</a>
                    <ul className="dropdown-content">
                        <li><a href="https://www.linkedin.com/in/chanya-thanglerdsumpan/">LinkedIn</a></li>
                        <li><a href="https://github.com/chanyagracet">GitHub</a></li>
                        <li><a href="mailto:chanyat@seas.upenn.edu">Email</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
