import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './style.css';

const Header = () => {
    const { count } = useContext(AppContext);
    return (
        <header>
            <nav className="navigation grey lighten-5">
                <div className="container">
                    <div className="nav-wrapper">
                        <ul className="center">
                            <li>
                                <Link className="black-text" to="/">
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link className="black-text" to="/products">
                                    Products( {count} )
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
