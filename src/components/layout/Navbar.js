import React from 'react';
import Logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar bg-light" fixed='Top'>
            <a href="/#">
                <img src={Logo} alt="Chow" style={{ width: '130px' }} />
            </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/recipes">Recipes</a>
                </li>
                <li>
                    <a href="/submitrecipe">Submit Recipes</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
