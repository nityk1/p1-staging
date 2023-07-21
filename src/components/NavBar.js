import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="services">Services</Link></li>
          <li><Link to="portfolio">Portfolio</Link></li>
          <li><Link to="team">Team</Link></li>
          <li><Link to="blog">Blog</Link></li>
          <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="#">Dropdown 1</Link></li>
              <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="#">Deep Dropdown 1</Link></li>
                  <li><Link to="#">Deep Dropdown 2</Link></li>
                  <li><Link to="#">Deep Dropdown 3</Link></li>
                  <li><Link to="#">Deep Dropdown 4</Link></li>
                  <li><Link to="#">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link to="#">Dropdown 2</Link></li>
              <li><Link to="#">Dropdown 3</Link></li>
              <li><Link to="#">Dropdown 4</Link></li>
            </ul>
          </li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </nav>

    </>
  );
}

export default NavBar;