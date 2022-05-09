import React from "react";
import "./Navbar.css";
import { Link }  from "react-router-dom";


const Navbar = () => {
    return (
      <div>
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
              voucher hunter 
          </Link>
        </nav>
      </div>
    );
  }

export default Navbar