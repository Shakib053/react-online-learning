import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="p-4  my-4 d-flex bg-info justify-content-center ">

            <div className="align-items-center">
                <p>&copy; Copyright 2021 Hajje Mohammad Mohsin Learning Academy. All Rights Reserved.</p>
            </div>
            <div className="d-inline px-2 mx-3 ">
                <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "white" }} className="px-2">About Us</Link>
                <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "white" }} className="px-2">Privacy Policy</Link>
                <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "white" }} className="px-2">Terms</Link>
                <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "white" }} className="px-2">SiteMap</Link>

            </div>

        </div>
    );
};

export default Footer;