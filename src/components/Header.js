import React from 'react';
import NavBar from './NavBar';

function Header() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1 className="d-flex align-items-center">logo</h1>
                    </a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                    <NavBar/>

                </div>
            </header>
        </>
    )
}

export default Header;