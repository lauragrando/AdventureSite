import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        {/* Titulo do site */}
                        TRVL
                        {/* logo do site */}
                        <i class='fab fa-typo3' />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    {/* Home da pagina */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        {/* Destinos da pagina */}
                        <li className='nav-item'>
                            <Link to='/Destiny' className='nav-links' onClick={closeMobileMenu}>
                                Destinos
                            </Link>
                        </li>

                        {/* Galeria da pagina */}
                        <li className='nav-item'>
                            <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                                Galeria
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>   
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>ENTRAR</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
