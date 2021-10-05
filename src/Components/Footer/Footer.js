import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="p-4  my-2 " style={{ backgroundColor: "#BCF1EA" }}>
            <div className="p-4  my-2 d-flex justify-content-center align-items-center ">

                <div className="icons mx-2 px-3">

                    <i className="fa fa-facebook-f fa-2x mx-4 p-2 border-3 rounded-3" ></i>
                    <i className="fa fa-instagram fa-2x mx-4 p-2 border-3 rounded-3"></i>
                    <i className="fa fa-twitter fa-2x mx-4 p-2 border-3 rounded-3"></i>

                </div>
                <div className="navs d-inline px-5 mx-3 ">
                    <button className="mx-3">       <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "black" }} className="px-2">About Us</Link></button>
                    <button className="mx-3"> <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "black" }} className="px-2">Contact Us</Link></button>
                    <button className="mx-3"> <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "black" }} className="px-2">Terms</Link></button>
                    <button className="mx-3">        <Link to='/about' style={{ textDecoration: "none", fontSize: "20px", color: "black" }} className="px-2">SiteMap</Link></button>

                </div>

            </div>
            <p>&copy; Copyright 2021 Hajje Mohammad Mohsin Learning Academy. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;