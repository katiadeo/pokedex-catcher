import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

    return (
        <header className='header'>
            <nav className='nav'>
                <Link as={Link} to="/">Pokedex</Link>
                <Link as={Link} to="/captured">Captured pokemons</Link>
            </nav>
        </header>
    )
};

export default Navbar;
