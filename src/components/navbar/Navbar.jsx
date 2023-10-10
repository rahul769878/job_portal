import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

    return <>
     <div className="main-page">
        <nav id="navbar">
          <Link to="/home" className='logo_link'>
          <h1 className="logo">
            Job<span>Hunt</span>
          </h1>
          </Link>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/saved-job">Saved Job</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>;
}



export default Navbar;