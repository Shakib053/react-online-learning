import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="d-flex m-5  justify-content-center bg-light p-3">
            <Link to='/home' className="px-5 " style={{ textDecoration: "none", fontSize: "30px" }}>Home</Link>
            <Link to='/about' className="px-5" style={{ textDecoration: "none", fontSize: "30px" }}>About Us</Link>
            <Link to='/services' className="px-5" style={{ textDecoration: "none", fontSize: "30px" }}>Services</Link>
            <Link to='/events' className="px-5" style={{ textDecoration: "none", fontSize: "30px" }}>Events</Link>

        </div>
    );

};

export default Header;