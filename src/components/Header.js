import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';

function Header() {
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        document.addEventListener('scroll', () => {
            window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
        });
    }
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <h1 className="d-flex align-items-center">logo</h1>
                    </Link>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                    <NavBar />

                </div>
            </header>
        </>
    )
}

export default Header;